import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from "@angular/material/tabs";
import {MatStepperModule} from '@angular/material/stepper';

const MaterialComponent =[
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatInputModule, 
  MatMenuModule,
  MatBadgeModule,
  MatGridListModule,
  MatCardModule,
  MatListModule,
  MatSidenavModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule
];

@NgModule({
  imports: [ MaterialComponent ],
  exports:[ MaterialComponent ]
})
export class MaterialModule { }
