import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import { PostpartumComponent } from './pages/postpartum/postpartum.component';
import { AdultComponent } from './pages/adult/adult.component';
import { NcdRiskComponent } from './pages/ncd-risk/ncd-risk.component';
import { MaternalComponent } from './pages/maternal/maternal.component';
import { TenAboveComponent } from './pages/ten-above/ten-above.component';
import { ElevenMonthsComponent } from './pages/eleven-months/eleven-months.component';
import { PediatricsComponent } from './pages/pediatrics/pediatrics.component';
import { Sidebar1Component } from './pages/sidebar1/sidebar1.component';
import { Sidebar2Component } from './pages/sidebar2/sidebar2.component';
import { Sidebar3Component } from './pages/sidebar3/sidebar3.component';



const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent},
  {path: 'adult', component:AdultComponent},
  {path: 'postpartum', component:PostpartumComponent},
  {path: 'ncd-risk', component: NcdRiskComponent},
  {path: 'maternal', component:MaternalComponent},
  {path: 'ten-above', component:TenAboveComponent},
  {path: 'eleven-months', component:ElevenMonthsComponent},
  {path: 'pediatrics', component:PediatricsComponent},
  {path: 'sidebar1', component:Sidebar1Component},
  {path: 'sidebar2', component:Sidebar2Component},
  {path: 'sidebar3', component:Sidebar3Component},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
