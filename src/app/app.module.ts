import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './AngularMaterial/material-ui.module';

import { DetailsService } from './details.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlanetsDetailsComponent } from './planets-details/planets-details.component';
import { PlanetsDistanceComponent } from './planets-distance/planets-distance.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlanetsDetailsComponent,
    PlanetsDistanceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
