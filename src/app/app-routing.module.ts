import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Route Components
import { HomeComponent } from './home/home.component'
import { CompletedComponent } from './completed/completed.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'done', component: CompletedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
