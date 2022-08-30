import app, { close, init } from "../../src/app.js";
import * as invoiceService from "../../src/services/invoiceService.js";
import * as invoiceUtils from "../../src/utils/invoiceUtils.js";
import { redisClient } from "../../src/config/redisConfig.js";
import { Response } from "express";
import supertest from "supertest";
import { JsxEmit } from "typescript";

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await close();
});

beforeEach(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
});

const server = supertest(app);

describe("POST '/invoice/send' - Utils", () => {
  it("should return 'starting' when more than 24h have passed since next endpoint call", async () => {
    jest.spyOn(redisClient, "get").mockResolvedValue("0");
    jest.spyOn(new Date(), "getTime").mockReturnValue(1000 * 60 * 60 * 25);
    const result = await invoiceUtils.processStatus();
    expect(result).toBe("starting");
  });
  it("should return 'starting' when endpoint is accessed for the first time after server initialization ", async () => {
    jest.spyOn(redisClient, "get").mockResolvedValue(null);
    const result = await invoiceUtils.processStatus();
    expect(result).toBe("starting");
  });
  it("should return the amount of time remaining for the endpoint to finish its process", async () => {
    const date = new Date();
    const mockInit = date.getTime();
    let mockNow = new Date(date).setHours(date.getHours() + 23);
    jest
      .spyOn(redisClient, "get")
      .mockImplementation(async () => mockInit.toString());
    jest.spyOn(Date.prototype, "getTime").mockImplementationOnce(() => mockNow);
    const result = await invoiceUtils.processStatus();
    expect(result).toBe(`Still 60 minutes left before execution runs out`);
  });
});

describe("POST '/invoice/send' - Services - invoiceSenderStatus", () => {
  it("should return an error when condition is not true", async () => {
    jest.spyOn(invoiceUtils, "processStatus").mockResolvedValue("error");
    const result = await invoiceService.invoiceSenderStatus();
    expect(result.type).toBe("tooEarly");
    expect(result.message).toBe("error");
  });
  it("should return true when condition is met", async () => {
    jest.spyOn(invoiceUtils, "processStatus").mockResolvedValue("starting");
    const result = await invoiceService.invoiceSenderStatus();
    expect(result).toBe(true);
  });
});
