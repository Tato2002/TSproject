import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopIdeasComponent } from './Pages/top-ideas/top-ideas.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Pages/login/login.component';
import { MoreComponent } from './Pages/more/more.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { ShareOwnIdeaComponent } from './Pages/share-own-idea/share-own-idea.component';
import { CommonIdeasComponent } from './Pages/common-ideas/common-ideas.component';
import { Admin84758472429Component } from './Pages/admin84758472429/admin84758472429.component';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopIdeasComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    MoreComponent,
    ProfileComponent,
    ShareOwnIdeaComponent,
    CommonIdeasComponent,
    Admin84758472429Component,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule {

}
