import starkbank from "starkbank";
import dotenv from "dotenv";

dotenv.config();

const project = new starkbank.Project({
  environment: "sandbox",
  id: "5998972724314112",
  privateKey: process.env.PRIVATE_KEY,
});

starkbank.user = project;
const starkbankClient = starkbank;

export default starkbankClient;
