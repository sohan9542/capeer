import { describe, expect, it } from "vitest";
import type { NextApiRequest, NextApiResponse } from "next";
import { requireMethods } from "./api";

function mockRes() {
  const res = {
    statusCode: 200,
    headers: {} as Record<string, string>,
    body: undefined as unknown,
    setHeader(name: string, value: string) {
      this.headers[name] = value;
      return this;
    },
    status(code: number) {
      this.statusCode = code;
      return this;
    },
    json(payload: unknown) {
      this.body = payload;
      return this;
    },
  };
  return res as typeof res & NextApiResponse;
}

describe("requireMethods", () => {
  it("allows a supported HTTP method", () => {
    const req = { method: "GET" } as NextApiRequest;
    const res = mockRes();

    expect(requireMethods(req, res, ["GET"])).toBe(true);
    expect(res.statusCode).toBe(200);
  });

  it("rejects unsupported methods with 405", () => {
    const req = { method: "POST" } as NextApiRequest;
    const res = mockRes();

    expect(requireMethods(req, res, ["GET"])).toBe(false);
    expect(res.statusCode).toBe(405);
    expect(res.headers.Allow).toBe("GET");
    expect(res.body).toEqual({ error: "Method not allowed" });
  });
});
