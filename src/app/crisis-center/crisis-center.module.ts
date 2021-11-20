import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import {CrisisListComponent} from "./crisis-list/crisis-list.component";

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule
  ],
  declarations: [
    CrisisListComponent,
    CrisisDetailComponent
  ]
})
export class CrisisCenterModule {}
