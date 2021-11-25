// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  people,
  activities,
} from "../../data";

const all_data = {
  people,
  activities,
};

export default function handler(req, res) {
  req.method === "GET" && res.status(200).json(all_data);
}
