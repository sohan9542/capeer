import fs from "fs";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";
import { requireMethods } from "@/lib/api";

type ErrorBody = {
  error: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string | ErrorBody>,
) {
  if (!requireMethods(req, res, ["GET"])) {
    return;
  }

  const htmlPath = path.join(process.cwd(), "public", "embedfile.html");

  if (!fs.existsSync(htmlPath)) {
    res.status(404).json({ error: "Embed HTML file not found" });
    return;
  }

  try {
    const html = fs.readFileSync(htmlPath, "utf-8");
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).send(html);
  } catch {
    res.status(500).json({ error: "Failed to read embed HTML file" });
  }
}
