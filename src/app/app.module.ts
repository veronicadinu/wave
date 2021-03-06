import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { StripeModule } from "stripe-angular"




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TrainingComponent } from './training/training.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { AddTrainingComponent } from './add-training/add-training.component';
import { AddRecoveryComponent } from './add-recovery/add-recovery.component';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { environment } from 'src/environments/environment';
import { ForgotComponent } from './forgot/forgot.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DonateComponent } from './donate/donate.component';
import { CategoryRecoveryComponent } from './category-recovery/category-recovery.component';
import { CategoryTrainingComponent } from './category-training/category-training.component';
import { ViewRecoveryComponent } from './view-recovery/view-recovery.component';
import { ViewTrainingComponent } from './view-training/view-training.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    TrainingComponent,
    RecoveryComponent,
    AdminComponent,
    ContactComponent,
    AddTrainingComponent,
    AddRecoveryComponent,
    TopComponent,
    BottomComponent,
    ForgotComponent,
    SidebarComponent,
    DonateComponent,
    CategoryRecoveryComponent,
    CategoryTrainingComponent,
    ViewRecoveryComponent,
    ViewTrainingComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    MatTabsModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatMenuModule,
    MatSelectModule,
    MatExpansionModule,
    StripeModule.forRoot("...YOUR-STRIPE-KEY-HERE...") 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
