import { Component, OnInit } from '@angular/core';
import { WorkoutService, Workout } from 'src/app/services/workout.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.page.html',
  styleUrls: ['./workout-list.page.scss'],
})
export class WorkoutListPage implements OnInit {

  private workouts: Observable<Workout[]>;

  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    this.workouts = this.workoutService.getWorkouts();
  }

}
