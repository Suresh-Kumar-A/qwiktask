import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { MockService } from './svc/mock.service';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { TaskgroupComponent } from './component/taskgroup/taskgroup.component';
import { BadgeModule } from 'primeng/badge';
import { MenuModule } from 'primeng/menu';
import { DragDropModule } from 'primeng/dragdrop';
import { ContextMenuModule } from 'primeng/contextmenu';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskgroupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    RippleModule,
    BreadcrumbModule,
    CardModule,
    BadgeModule,
    MenuModule,
    DragDropModule,
    ContextMenuModule
  ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
