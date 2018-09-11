import { triangleService } from './services/triangle.service';
import { calculatorService } from './services/calculator.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { AverageMarksComponent } from './average-marks/average-marks.component';

import {FormsModule} from '@angular/forms';
import { CircleComponent } from './circle/circle.component';
import { MycalculatorComponent } from './mycalculator/mycalculator.component';
import { TriangleComponent } from './triangle/triangle.component';
import { DoctorComponent } from './doctor/doctor.component';
import { CitiesComponent } from './cities/cities.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    AverageMarksComponent,
    CircleComponent,
    MycalculatorComponent,
    TriangleComponent,
    DoctorComponent,
    CitiesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    calculatorService,
    triangleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
