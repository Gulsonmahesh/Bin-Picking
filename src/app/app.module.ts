import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/user/login/login.component';
import { LogoffComponent } from './Components/user/logoff/logoff.component';
import { SidebarComponent } from './Components/main/sidebar/sidebar.component';
import { MainComponent } from './Components/main/main.component';
import { DashboardComponent } from './Components/main/dashboard/dashboard.component';
import { ProjectDetailsComponent } from './steps/project-details/project-details.component';
import { RobotComponent } from './steps/robot/robot.component';
import { GripperComponent } from './steps/gripper/gripper.component';
import { GripperTcpComponent } from './steps/gripper-tcp/gripper-tcp.component';
import { ObjectComponent } from './steps/object/object.component';
import { GrippingPointsComponent } from './steps/gripping-points/gripping-points.component';
import { EnvironmentComponent } from './steps/environment/environment.component';
import { CalibrationComponent } from './steps/calibration/calibration.component';
import { DeployComponent } from './steps/deploy/deploy.component';
import { ExecuteBinComponent } from './steps/execute-bin/execute-bin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LogoffComponent,
    SidebarComponent,
    MainComponent,
    DashboardComponent,
    ProjectDetailsComponent,
    RobotComponent,
    GripperComponent,
    GripperTcpComponent,
    ObjectComponent,
    GrippingPointsComponent,
    EnvironmentComponent,
    CalibrationComponent,
    DeployComponent,
    ExecuteBinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
