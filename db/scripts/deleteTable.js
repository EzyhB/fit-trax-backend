"use strict";
exports.__esModule = true;
var __1 = require("..");
var deleteWorkoutsTable = function () {
    (0, __1["default"])("DROP TABLE IF EXISTS workouts;");
};
var deleteExerciseTable = function () {
    (0, __1["default"])("DROP TABLE IF EXISTS exercises;");
};
deleteExerciseTable();
deleteWorkoutsTable();
