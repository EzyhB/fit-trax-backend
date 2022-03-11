"use strict";
exports.__esModule = true;
var __1 = require("..");
var createWorkoutTable = function () {
    return (0, __1["default"])("CREATE TABLE IF NOT EXISTS workouts (id TEXT, time timestamp default CURRENT_TIMESTAMP, workout_name TEXT, workout_type TEXT, workout_difficulty TEXT);");
};
var createExerciseTable = function () {
    return (0, __1["default"])("CREATE TABLE IF NOT EXISTS exercises (id SERIAL PRIMARY KEY, exercise_name TEXT, sets INT, reps INT, rest_period TEXT, workout_ref TEXT);");
};
createWorkoutTable();
createExerciseTable();
