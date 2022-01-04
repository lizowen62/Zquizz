import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  {path:"", redirectTo: 'home', pathMatch: "full"},
  {path:"home", component:HomepageComponent},
  {path:"quizz", component:QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
