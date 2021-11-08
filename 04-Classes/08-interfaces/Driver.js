"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FootballCoach_1 = require("./FootballCoach");
var TennisCoach_1 = require("./TennisCoach");
var footballCoach = new FootballCoach_1.FootballCoach;
var tennisCoach = new TennisCoach_1.TennisCoach;
var coaches = [];
coaches.push(footballCoach, tennisCoach);
for (var _i = 0, coaches_1 = coaches; _i < coaches_1.length; _i++) {
    var coach = coaches_1[_i];
    console.log(coach.getDailyWorkouts());
}
