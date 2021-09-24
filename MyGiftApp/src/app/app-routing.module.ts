import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GuestComponent } from './guest/guest.component';
import { FilterscreenComponent } from './filterscreen/filterscreen.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { CustomComponent } from './custom/custom.component';

const routes: Routes = [
  {
     path: '',
     redirectTo: 'home',
     pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'guest',
    component: GuestComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'filterscreen',
    component: FilterscreenComponent
  },
  {
    path: 'search',
    component: MainscreenComponent
  },
  {
    path: 'custom',
    component: CustomComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
