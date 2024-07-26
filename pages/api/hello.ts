// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// to hit this endpoint go to localhost:3000/[filename] in out case localhost:3000/hello 
// this wont work as of now as we using src folder which is given more priority that pages
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: "John Doe" });
}