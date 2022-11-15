import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BudgetManagerComponent } from './budget-manager/budget-manager.component';
import { AddBudgetComponent } from './add-budget/add-budget.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetManagerComponent,
    AddBudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
