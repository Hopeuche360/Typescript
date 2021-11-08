import { Coach } from "./Coach";

export class TennisCoach implements Coach {
    getDailyWorkouts(): string {
        return "Practice the super service";
    }
    
}