import { invoiceBuilder } from "../utils/invoiceUtils.js";
import axios from "axios";
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

export { invoiceSender };
