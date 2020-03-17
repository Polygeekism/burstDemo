import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Workout {
  id?: string,
  name: string,
  notes: string
}
 
@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts: Observable<Workout[]>;
  private workoutCollection: AngularFirestoreCollection<Workout>;
 
  constructor(private afs: AngularFirestore) {
    this.workoutCollection = this.afs.collection<Workout>('workouts');
    this.workouts = this.workoutCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getWorkouts(): Observable<Workout[]> {
    return this.workouts;
  }
 
  getWorkout(id: string): Observable<Workout> {
    return this.workoutCollection.doc<Workout>(id).valueChanges().pipe(
      take(1),
      map(workout => {
        workout.id = id;
        return workout
      })
    );
  }
 
  addWorkout(workout: Workout): Promise<DocumentReference> {
    return this.workoutCollection.add(workout);
  }
 
  updateWorkout(workout: Workout): Promise<void> {
    return this.workoutCollection.doc(workout.id).update({ name: workout.name, notes: workout.notes });
  }
 
  deleteWorkout(id: string): Promise<void> {
    return this.workoutCollection.doc(id).delete();
  }
}
