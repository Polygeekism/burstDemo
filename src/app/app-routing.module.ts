import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes =  [
  { path: '', loadChildren: './pages/workout-list/workout-list.module#WorkoutListPageModule' },
  { path: 'workout', loadChildren: './pages/workout-details/workout-details.module#WorkoutDetailsPageModule' },
  { path: 'workout/:id', loadChildren: './pages/workout-details/workout-details.module#WorkoutDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
