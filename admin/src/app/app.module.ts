import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { AdultComponent } from './pages/adult/adult.component';
import { PostpartumComponent } from './pages/postpartum/postpartum.component';
import { MaternalComponent } from './pages/maternal/maternal.component';
import { NcdRiskComponent } from './pages/ncd-risk/ncd-risk.component';
import { TenAboveComponent } from './pages/ten-above/ten-above.component';
import { ElevenMonthsComponent } from './pages/eleven-months/eleven-months.component';
import { PediatricsComponent } from './pages/pediatrics/pediatrics.component';
import { Sidebar1Component } from './pages/sidebar1/sidebar1.component';
import { Sidebar2Component } from './pages/sidebar2/sidebar2.component';
import { Sidebar3Component } from './pages/sidebar3/sidebar3.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    AdultComponent,
    PostpartumComponent,
    MaternalComponent,
    NcdRiskComponent,
    TenAboveComponent,
    ElevenMonthsComponent,
    PediatricsComponent,
    Sidebar1Component,
    Sidebar2Component,
    Sidebar3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
