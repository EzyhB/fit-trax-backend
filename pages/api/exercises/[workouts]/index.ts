import NextCors from "nextjs-cors";
import type { NextApiRequest, NextApiResponse } from "next";

import query from "../../../../db";

export default async function getWorkoutExercise(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { workouts } = req.query;

  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  if (method === "GET") {
    const data = await query("SELECT * FROM exercises WHERE workout_ref = $1", [
      workouts,
    ]);

    return res.json(data);
  }
}
