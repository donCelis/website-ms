// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    data_features: [
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
  });
}
