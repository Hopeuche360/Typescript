import { Coach } from "./Coach";

export class FootballCoach implements Coach {
    getDailyWorkouts(): string {
        return "Practice dribbling";
    }
    
}