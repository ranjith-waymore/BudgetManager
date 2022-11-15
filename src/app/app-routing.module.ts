import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddBudgetComponent } from './add-budget/add-budget.component';
import { BudgetManagerComponent } from './budget-manager/budget-manager.component';

const routes: Routes = [
  {
    path: '',
    component: BudgetManagerComponent
  },
  {
    path: 'addBudget',
    component: AddBudgetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
