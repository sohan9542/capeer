import type { NextApiRequest, NextApiResponse } from "next";
import { requireMethods } from "@/lib/api";

type Data = {
  name: string;
};

type ErrorBody = {
  error: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorBody>,
) {
  if (!requireMethods(req, res, ["GET"])) {
    return;
  }

  res.status(200).json({ name: "John Doe" });
}
