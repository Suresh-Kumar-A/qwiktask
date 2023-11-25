import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { MenuModule } from 'primeng/menu';
import { DragDropModule } from 'primeng/dragdrop';
import { ContextMenuModule } from 'primeng/contextmenu';
import { AvatarModule } from 'primeng/avatar'

import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { MockService } from './svc/mock.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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
    ContextMenuModule,
    AvatarModule
  ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
