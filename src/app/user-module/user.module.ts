import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



import { MaterialModule } from '../material.module';
import { ComapanyListingComponent } from './company/comapany-listing/comapany-listing.component';
import { UserHeaderComponent } from './user-header/user-header.component';

import { UserLocationComponent } from './user-location/user-location.component';

import { CitiesService } from '../_service/cities.service';
import { AreaService } from '../_service/area.service';
import { BranchService } from '../_service/branch.service';

import { CompanyServicesComponent } from './company/company-services/company-services.component';
import { CompanyBranchComponent } from './company/company-branch/company-branch.component';
import { UserTicketComponent } from './user-ticket/user-ticket.component';
import { WarningComponent } from './alerts/warning/warning.component';
import { InfoAlertComponent } from './alerts/info-alert/info-alert.component';
import { ServeUserComponent } from './alerts/serve-user/serve-user.component';
import { TicketService } from '../_service/ticket.service';
import { HistoryComponent } from './user-profile/history/history.component';
import { ProfileHeaderComponent } from './user-profile/profile-header/profile-header.component';
import { LocationComponent } from './user-profile/location/location.component';
import { SettingComponent } from './user-profile/setting/setting.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { SpinnerComponent } from './spinner/spinner.component'



@NgModule({

  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  providers: [CitiesService, AreaService, BranchService, TicketService, MatSnackBar],
  exports: [MaterialModule],
  declarations: [ComapanyListingComponent, UserHeaderComponent, UserLocationComponent, CompanyServicesComponent, CompanyBranchComponent, UserTicketComponent, WarningComponent, InfoAlertComponent, ServeUserComponent, ProfileHeaderComponent, HistoryComponent, LocationComponent,SettingComponent, SpinnerComponent]


})
export class UserModule { }
