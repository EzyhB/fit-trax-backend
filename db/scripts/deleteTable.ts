import query from "..";

export {};

const deleteWorkoutsTable = () => {
  query("DROP TABLE IF EXISTS workouts;");
};
const deleteExerciseTable = () => {
  query("DROP TABLE IF EXISTS exercises;");
};

// deleteExerciseTable();
deleteWorkoutsTable();
