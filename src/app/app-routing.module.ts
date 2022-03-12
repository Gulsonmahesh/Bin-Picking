import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  { path: '', component: ProjectDetailsComponent },
  { path: 'robot', component: RobotComponent },
  { path: 'gripper', component: GripperComponent },
  { path: 'grippertcp', component: GripperTcpComponent },
  { path: 'object', component: ObjectComponent },
  { path: 'grippingpoints', component: GrippingPointsComponent },
  { path: 'environment', component: EnvironmentComponent },
  { path: 'calibration', component: CalibrationComponent },
  { path: 'deploy', component: DeployComponent },
  { path: 'executebin', component: ExecuteBinComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
