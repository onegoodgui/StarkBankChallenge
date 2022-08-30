import { invoiceBuilder, processStatus } from "../utils/invoiceUtils.js";
import { serviceErrorToStatusCode } from "../utils/errorUtils.js";
import axios from "axios";
import { Response } from "express";
import { errorTypes } from "../utils/errorUtils.js";
import { Person } from "../utils/userUtils.js";
import { faker } from "@faker-js/faker";

async function invoiceGenerator() {
  let i = Math.floor(Math.random() * 5);
  const number = 8 + i;
  for (let j = 0; j < number; j++) {
    const name = faker.name.fullName();
    const user = new Person(name);
    const amount = parseInt(faker.finance.amount(100000, 1000000, 0));

    const invoices = invoiceBuilder(user, amount);

    try {
      await axios.post(
        "https://challenge447789.sandbox.starkbank.com/v2/invoice",
        invoices
      );
    } catch (err) {
      console.error(err);
    }
  }
  console.log("foi");
}

async function invoiceSender(interval: number, limit: number) {
  invoiceGenerator();
  let timesUp = false;

  setTimeout(() => {
    return (timesUp = true);
  }, limit);

  const refreshId = setInterval(() => {
    if (timesUp) {
      clearInterval(refreshId);
    }
    invoiceGenerator();
  }, interval);
}

async function invoiceSenderStatus() {
  const status = await processStatus();
  try {
    if (status === "starting") {
      return true;
    } else {
      throw errorTypes.tooEarly(status);
    }
  } catch (err) {
    return err;
  }
}

export { invoiceSender, invoiceSenderStatus };
