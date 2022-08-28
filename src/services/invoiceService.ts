import { invoiceBuilder } from "../utils/invoiceUtils.js";
import { Person } from "../utils/userUtils.js";
import { faker } from "@faker-js/faker";
import axios from "axios";

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
}

async function invoiceSender(interval: number, limit: number) {
  invoiceGenerator();
  let time = interval;
  if (time <= limit) {
    setTimeout(invoiceGenerator, interval);
    setTimeout(() => {
      time = time + interval;
    }, interval);
  } else {
    return;
  }
}

export { invoiceSender };
