import query from "..";

export {};
import { workoutData } from "./dummyData";
import { exerciseData } from "./dummyData";

const populateWorkoutTable = async () => {
  workoutData.forEach(async (el) => {
    const result = await query(
      "INSERT INTO workouts (id, workout_name, workout_type, workout_difficulty) VALUES ($1, $2, $3, $4);",
      [el.id, el.workout_name, el.workout_type, el.workout_difficulty]
    );
  });
};

const populateExerciseTable = async () => {
  exerciseData.forEach(async (el) => {
    const result = await query(
      "INSERT INTO exercises (exercise_name, sets, reps, rest_period, workout_ref) VALUES ($1, $2, $3, $4, $5);",
      [el.exercise_name, el.sets, el.reps, el.restPeriod, el.workout_ref]
    );
  });
};

populateWorkoutTable();
populateExerciseTable();
