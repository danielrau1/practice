import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ContactComponent} from './components/contact/contact.component';
import {AboutComponent} from './components/about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: ContactComponent},
  {path: 'contact', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
