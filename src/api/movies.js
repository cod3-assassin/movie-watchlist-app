import db from "../../db.json";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(db.movies);
  } else if (req.method === "POST") {
    const newMovie = req.body;
    newMovie.id = db.movies.length + 1;
    db.movies.push(newMovie);
    res.status(201).json(newMovie);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
