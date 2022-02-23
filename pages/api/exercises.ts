// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../db";
import NextCors from "nextjs-cors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (req.method === "GET") {
    const data = await query("SELECT * FROM exercises");
    res.json(data.rows);
  }

  if (req.method === "POST") {
    const el = req.body;
    const data = await query(
      "INSERT INTO exercises (exercise_name, sets, reps, rest_period, workout_ref) VALUES($1, $2, $3, $4, $5);",
      [el.exercise_name, el.sets, el.reps, el.rest_period, el.workout_ref]
    );
    res.json(data.rows);
  }

  if (req.method === "DELETE") {
    const data = await query("DELETE FROM exercises WHERE id = $1;", [
      req.body.id,
    ]);
    res.json({ message: "Exercise deleted" });
  }
}
