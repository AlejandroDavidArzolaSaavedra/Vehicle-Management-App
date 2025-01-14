import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './pages/GeneralComponents/header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {AdminsUserListComponent} from './pages/admins-user-list/admins-user-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {NgOptimizedImage} from "@angular/common";
import {UserFilterPipe} from './models/User/user-filter.pipe';
import {FormsModule} from "@angular/forms";
import {CardCarComponent} from './pages/card-car/card-car.component';
import {MapComponent} from './pages/GeneralComponents/map/map.component';
import {GasStationListComponent} from './pages/home-page/gas-station-list/gas-station-list.component';
import {DataUserComponent} from './pages/user-profile-view/data-user/data-user.component';
import {LoginComponent} from './pages/login/login/login.component';
import {FooterComponent} from './pages/GeneralComponents/footer/footer.component';
import {
  UserFormIconAndOptionsComponent
} from './pages/user-profile-view/user-form-icon-and-options/user-form-icon-and-options.component';
import {HeaderMobileComponent} from './pages/GeneralComponents/header-mobile/header-mobile.component';
import {GoogleMapsModule} from '@angular/google-maps';
import {GasInfoPageComponent} from './pages/gas-info-page/gas-info-page.component';
import {GasPriceListComponent} from './pages/GeneralComponents/gas-price-list/gas-price-list.component';
import {UserProfileViewComponent} from "./pages/user-profile-view/user-profile-view.component";
import {FormCarComponent} from "./pages/form-car/form-car.component";
import {FormPumpingComponent} from './pages/GeneralComponents/Forms/form-pumping/form-pumping.component';
import {UserRegistrationComponent} from "./pages/user-registration/user-registration.component";
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {provideAuth, getAuth} from '@angular/fire/auth';
import {provideFirestore, getFirestore} from '@angular/fire/firestore';
import {provideStorage, getStorage} from '@angular/fire/storage';
import {FormReparationComponent} from './pages/GeneralComponents/Forms/form-reparation/form-reparation.component';
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import { CarFormIconAndOptionsComponent } from './pages/car-profile-view/car-form-icon-and-options/car-form-icon-and-options.component';
import { PumpingListComponent } from './pages/car-profile-view/child-pumping-list/pumping-list.component';
import { SpareListComponent } from './pages/car-profile-view/child-spare-list/spare-list.component';
import { MaintenanceListComponent } from './pages/car-profile-view/child-maintenance-list/maintenance-list.component';
import { CarProfileViewComponent } from './pages/car-profile-view/car-profile-view.component';
import { ParentButtonsComponent } from './pages/car-profile-view/parent-buttons/parent-buttons.component';
import { UserProfileUpdateComponent } from './pages/user-profile-update/user-profile-update.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    AdminsUserListComponent,
    AboutUsComponent,
    CardCarComponent,
    UserFilterPipe,
    MapComponent,
    GasStationListComponent,
    DataUserComponent,
    AboutUsComponent,
    LoginComponent,
    FooterComponent,
    UserFormIconAndOptionsComponent,
    HeaderMobileComponent,
    GasInfoPageComponent,
    GasPriceListComponent,
    UserProfileViewComponent,
    FormCarComponent,
    FormPumpingComponent,
    UserRegistrationComponent,
    FormReparationComponent,
    CarFormIconAndOptionsComponent,
    PumpingListComponent,
    SpareListComponent,
    MaintenanceListComponent,
    CarProfileViewComponent,
    ParentButtonsComponent,
    UserProfileUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgOptimizedImage,
    GoogleMapsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {
}
