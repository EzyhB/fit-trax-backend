import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../db";
import NextCors from "nextjs-cors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  if (req.method === "GET") {
    const data = await query("SELECT * FROM workouts");
    res.json(data.rows);
  }

  if (req.method === "POST") {
    const el = req.body;
    const data = await query(
      "INSERT INTO workouts (id, workout_name, workout_type, workout_difficulty) VALUES($1, $2, $3, $4);",
      [el.id, el.workout_name, el.workout_type, el.workout_difficulty]
    );

    res.json(data.rows);
  }

  if (req.method === "DELETE") {
    const data = await query("DELETE FROM workouts WHERE id = $1;", [
      req.body.id,
    ]);
    res.json({ message: "Request deleted" });
  }
}
