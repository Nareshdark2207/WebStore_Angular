import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { HeaderComponent } from './navigation/header/header.component';
import { StoreInfoComponent } from './store-info/store-info.component';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreViewComponent } from './store-view/store-view.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'store-info', component: StoreInfoComponent },
  { path: 'store-list', component: StoreListComponent },
  { path: 'store-view', component: StoreViewComponent },
  { path: '',   redirectTo: '/store-view', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
