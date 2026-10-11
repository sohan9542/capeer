import type { NextApiRequest, NextApiResponse } from "next";

export function methodNotAllowed(
  res: NextApiResponse,
  allowed: readonly string[],
): void {
  res.setHeader("Allow", allowed.join(", "));
  res.status(405).json({ error: "Method not allowed" });
}

export function requireMethods(
  req: NextApiRequest,
  res: NextApiResponse,
  allowed: readonly string[],
): boolean {
  const method = req.method ?? "";
  if (!allowed.includes(method)) {
    methodNotAllowed(res, allowed);
    return false;
  }
  return true;
}
