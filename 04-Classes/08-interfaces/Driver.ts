import { Coach } from "./Coach";
import { FootballCoach } from "./FootballCoach";
import { TennisCoach } from "./TennisCoach";

let footballCoach = new FootballCoach;
let tennisCoach = new TennisCoach;

let coaches: Coach[] = [];
coaches.push(footballCoach, tennisCoach);

for (let coach of coaches) {
    console.log(coach.getDailyWorkouts());
}