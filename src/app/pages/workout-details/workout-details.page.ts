import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutService, Workout } from 'src/app/services/workout.service';
import { ToastController } from '@ionic/angular';
 
@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.page.html',
  styleUrls: ['./workout-details.page.scss'],
})
export class WorkoutDetailsPage implements OnInit {
 
  workout: Workout = {
    name: '',
    notes: '',
    totalWeight:0
  };
 
  constructor(private activatedRoute: ActivatedRoute, private workoutService: WorkoutService,
    private toastCtrl: ToastController, private router: Router) { }
 
  ngOnInit() { }
 
  ionViewWillEnter() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.workoutService.getWorkout(id).subscribe(workout => {
        this.workout = workout;
      });
    }
  }
 
  addWorkout() {
    this.workoutService.addWorkout(this.workout).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('Workout added');
    }, err => {
      this.showToast('There was a problem adding your workout :(');
    });
  }
 
  deleteWorkout() {
    this.workoutService.deleteWorkout(this.workout.id).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('Workout deleted');
    }, err => {
      this.showToast('There was a problem deleting your workout :(');
    });
  }
 
  updateWorkout() {
    this.workoutService.updateWorkout(this.workout).then(() => {
      this.showToast('Workout updated');
    }, err => {
      this.showToast('There was a problem updating your workout :(');
    });
  }
 
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }
}
