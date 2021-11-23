// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const all_data = {
  slider: [
    {
      image: "/images/bg-home.png",
      title: "Lorem ipsum dolor sit amet 1",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      name_btn: "Lorem ipsum",
    },
    {
      image: "/images/bg-home.png",
      title: "Lorem ipsum dolor sit amet 2",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      name_btn: "Lorem ipsum",
    },
    {
      image: "/images/bg-home.png",
      title: "Lorem ipsum dolor sit amet 3",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      name_btn: "Lorem ipsum",
    },
  ],

  features: [
    {
      title: "Lorem, ipsum dolor.",
      image: "/images/features/80-300x300.jpg",
    },
    {
      title: "Lorem, ipsum dolor.",
      image: "/images/features/230-300x300.jpg",
    },
    {
      title: "Lorem, ipsum dolor.",
      image: "/images/features/938-300x300.jpg",
    },
  ],

  services: [
    {
      title: "Lorem ipsum",
      image: "/images/icons/loves.svg",
      name_btn: "Lorem ipsum",
    },
    {
      title: "Lorem ipsum",
      image: "/images/icons/hands.svg",
      name_btn: "Lorem ipsum",
    },
    {
      title: "Lorem ipsum",
      image: "/images/icons/portfolios.svg",
      name_btn: "Lorem ipsum",
    },
  ],
  partners: [
    {
      image: "/images/partners/juegging.png",
      alt: "Lorem ipsum",
    },
    {
      image: "/images/partners/riverbed.png",
      alt: "Lorem ipsum",
    },
    {
      image: "/images/partners/wise.png",
      alt: "Lorem ipsum",
    },
    {
      image: "/images/partners/kiosko.png",
      alt: "Lorem ipsum",
    },
    {
      image: "/images/partners/juegging.png",
      alt: "Lorem ipsum",
    },
    {
      image: "/images/partners/riverbed.png",
      alt: "Lorem ipsum",
    },
    {
      image: "/images/partners/wise.png",
      alt: "Lorem ipsum",
    },
    {
      image: "/images/partners/kiosko.png",
      alt: "Lorem ipsum",
    },
  ],
};

export default function handler(req, res) {
  req.method === "GET" && res.status(200).json(all_data);
}
