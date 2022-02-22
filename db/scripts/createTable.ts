export {};

import query from "..";

const createWorkoutTable = () => {
  return query(
    "CREATE TABLE IF NOT EXISTS workouts (id TEXT, workout_name TEXT, workout_type TEXT, workout_difficulty TEXT);"
  );
};

const createExerciseTable = () => {
  return query(
    "CREATE TABLE IF NOT EXISTS exercises (id SERIAL PRIMARY KEY, exercise_name TEXT, sets INT, reps INT, rest_period TEXT, workout_ref TEXT);"
  );
};

createWorkoutTable();
createExerciseTable();
