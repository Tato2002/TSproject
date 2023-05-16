import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat'


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
import { CommonIdeasComponent } from './Pages/common-ideas/common-ideas.component';
import { Admin84758472429Component } from './Pages/admin84758472429/admin84758472429.component';




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
    ShareOwnIdeaComponent,
    CommonIdeasComponent,
    Admin84758472429Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,

    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC_-fvEORHIqGWgXw849uvOS-bf06HRcrw",
      authDomain: "idea-42fac.firebaseapp.com",
      databaseURL: "https://idea-42fac-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "idea-42fac",
      storageBucket: "idea-42fac.appspot.com",
      messagingSenderId: "851880676026",
      appId: "1:851880676026:web:670f4f4f4ae63771325083",
      measurementId: "G-2LZYCPGGVG"
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
