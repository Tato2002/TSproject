import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopIdeasComponent } from './Pages/top-ideas/top-ideas.component';
import { HomeComponent } from './Pages/home/home.component';
import { RegistrationComponent } from './Pages/registration/registration.component';
import { LoginComponent } from './Pages/login/login.component';
import { MoreComponent } from './Pages/more/more.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { ShareOwnIdeaComponent } from './Pages/share-own-idea/share-own-idea.component';
import { CommonIdeasComponent } from './Pages/common-ideas/common-ideas.component';
import { Admin84758472429Component } from './Pages/admin84758472429/admin84758472429.component';

const routes: Routes = [
  {path:'top-ideas', component:TopIdeasComponent},
  {path:'common-ideas', component:CommonIdeasComponent},
  {path:'admin84758472429', component:Admin84758472429Component},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'more', component:MoreComponent},
  {path:'profile', component:ProfileComponent},
  {path:'share-own-idea', component:ShareOwnIdeaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
