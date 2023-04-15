import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopIdeasComponent } from './Pages/top-ideas/top-ideas.component';
import { HomeComponent } from './Pages/home/home.component';
import { RegistrationComponent } from './Pages/registration/registration.component';
import { LoginComponent } from './Pages/login/login.component';
import { MoreComponent } from './Pages/more/more.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { ShareOwnIdeaComponent } from './Pages/share-own-idea/share-own-idea.component';

const routes: Routes = [
  {path:'top-ideas', component:TopIdeasComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
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
