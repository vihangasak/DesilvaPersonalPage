import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalPageComponent } from './personal-page/personal-page.component';

const routes: Routes = [
  { path:'', component: PersonalPageComponent }, //Default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
