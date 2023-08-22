import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopIdeasComponent } from './Pages/top-ideas/top-ideas.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { MoreComponent } from './Pages/more/more.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { ShareOwnIdeaComponent } from './Pages/share-own-idea/share-own-idea.component';
import { CommonIdeasComponent } from './Pages/common-ideas/common-ideas.component';
import { Admin84758472429Component } from './Pages/admin84758472429/admin84758472429.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path:'top-ideas', component:TopIdeasComponent, canActivate: [AuthGuard]},
  {path:'common-ideas', component:CommonIdeasComponent, canActivate: [AuthGuard]},
  {path:'admin84758472429', component:Admin84758472429Component, canActivate: [AuthGuard]},
  {path:'', redirectTo:'auth', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'more', component:MoreComponent},
  {path:'profile', component:ProfileComponent, canActivate: [AuthGuard]},
  {path:'share-own-idea', component:ShareOwnIdeaComponent, canActivate: [AuthGuard]},
  {path: 'auth', component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
