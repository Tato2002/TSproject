import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopIdeasComponent } from './Pages/top-ideas/top-ideas.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationComponent } from './Pages/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Pages/login/login.component';
import { MoreComponent } from './Pages/more/more.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { ShareOwnIdeaComponent } from './Pages/share-own-idea/share-own-idea.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopIdeasComponent,
    FooterComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    MoreComponent,
    ProfileComponent,
    ShareOwnIdeaComponent
  ],
  imports: [
    BrowserModule,
    //HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
