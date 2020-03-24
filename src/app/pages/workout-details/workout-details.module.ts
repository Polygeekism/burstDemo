import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutDetailsPageRoutingModule } from './workout-details-routing.module';

import { WorkoutDetailsPage } from './workout-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    WorkoutDetailsPageRoutingModule
  ],
  declarations: [WorkoutDetailsPage]
})
export class WorkoutDetailsPageModule {}
