import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { StartPageComponent } from './start-page/start-page.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PhonePipe } from './phone.pipe';
import { BucketListComponent } from './bucket-list/bucket-list.component';
import { StepDetailsComponent } from './step-details/step-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailsComponent,
    StartPageComponent,
    HeaderComponentComponent,
    LoginPageComponent,
    BucketListComponent,
    StepDetailsComponent,
    PhonePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
