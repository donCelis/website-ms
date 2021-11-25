// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  slider,
  features,
  services,
  partners,
  menu_links,
  socials_links,
  people,
  activities,
} from "../../data";

const all_data = {
  slider,
  features,
  services,
  partners,
  menu_links,
  socials_links,
  people,
  activities,
};

export default function handler(req, res) {
  req.method === "GET" && res.status(200).json(all_data);
}
