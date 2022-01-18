import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecoveryComponent } from './add-recovery/add-recovery.component';
import { AddTrainingComponent } from './add-training/add-training.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { RegisterComponent } from './register/register.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [

{
  path:'register',
  component: RegisterComponent
},

{
  path:'login',
  component:LoginComponent
},

{
  path:'',
  component:HomeComponent

},

{
  path:'training',
  component: TrainingComponent
},

{
  path:'recovery',
  component: RecoveryComponent
},

{
  path:'contact',
  component: ContactComponent
}
,

{
  path:'admin',
  component: AdminComponent
}
,

{
  path:'addTraining',
  component: AddTrainingComponent
}
,

{
  path:'addRecovery',
  component: AddRecoveryComponent
},

{
  path:'forgot',
  component: ForgotComponent
}








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
