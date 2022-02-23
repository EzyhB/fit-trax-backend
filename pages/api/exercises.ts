import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../db";
import NextCors from "nextjs-cors";
type exercise = {
  exercise_name: string;
  sets: number;
  reps: number;
  rest_period: string;
  workout_ref: string;
};

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
    const data = await query("SELECT * FROM exercises");
    return res.json(data.rows);
  }

  if (req.method === "POST") {
    const elArray = req.body;

    elArray.forEach(async (el: exercise) => {
      const data = await query(
        "INSERT INTO exercises (exercise_name, sets, reps, rest_period, workout_ref) VALUES($1, $2, $3, $4, $5);",
        [el.exercise_name, el.sets, el.reps, el.rest_period, el.workout_ref]
      );
      return res.json(data.rows);
    });
  }

  if (req.method === "DELETE") {
    await query("DELETE FROM exercises WHERE id = $1;", [req.body.id]);
    return res.json({
      message: `exercise with the id ${req.body.id} has been deleted`,
    });
  }
}
