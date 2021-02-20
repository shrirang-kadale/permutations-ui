import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatePermutationsComponent } from './calculate-permutations/calculate-permutations.component';

const routes: Routes = [
  { path: '', redirectTo: '/calculate', pathMatch: 'full' },
  { path: 'calculate', component: CalculatePermutationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
