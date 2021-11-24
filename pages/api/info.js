// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  data_slider,
  data_features,
  data_services,
  data_partners,
  menu_links,
  socials_links,
  data_people,
} from "../../data";

const all_data = {
  slider: data_slider,
  features: data_features,
  services: data_services,
  partners: data_partners,
  menu_links,
  socials_links,
  people: data_people,
};

export default function handler(req, res) {
  req.method === "GET" && res.status(200).json(all_data);
}
