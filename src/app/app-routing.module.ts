import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginpageComponent} from './loginpage/loginpage.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ViewDetailsComponent} from './view-details/view-details.component';
import {RegistrationComponent} from './registration/registration.component';
import {AboutUsComponent} from './MasterPage -UI/about-us/about-us.component';
import {ContactUsComponent} from './MasterPage -UI/contact-us/contact-us.component';
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginpageComponent},
  {path:'registration',component:RegistrationComponent},
  
  { path:'Home',component:HomepageComponent,children:[
    {
      path:'View',component:ViewDetailsComponent
    },
    {path:'details/:id/:action',component:RegistrationComponent},
    {path:'AboutUs',component:AboutUsComponent},
    {path:'ContactUs',component:ContactUsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
