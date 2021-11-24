// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data_people } from "../../data";

export default function handler(req, res) {
  req.method === "GET" && res.status(200).json(data_people);
}
