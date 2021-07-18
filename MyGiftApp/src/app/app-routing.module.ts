import { GuestComponentComponent } from './Register/guest-component/guest-component.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FilterscreenComponent } from './filterscreen/filterscreen.component';

const routes: Routes = [
  {
<<<<<<< HEAD
=======
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
>>>>>>> c91396bf836d42bf25f53029dcf5f2ac8dbef472
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'filterscreen',
    component: FilterscreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
