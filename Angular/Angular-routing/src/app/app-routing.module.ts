import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MyAuthGuard } from './myauthguard';

// hold all routing path details
const routes: Routes = [
  {path: '\about-us', component: AboutUsComponent},
  {path: '\contact-us', component: ContactUsComponent},
  {path: '\home', component: DashboardComponent, canActivate: [MyAuthGuard]},
  {path: '\login', component: LoginComponent},
  {path: '', redirectTo: '\login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
