import { MatDialog } from '@angular/material/dialog';
import { FriendsComponent } from './views/friends/friends.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuItem, MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatTooltip } from '@angular/material/tooltip';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './views/menu/menu.component';
import { MainComponent } from './views/main/main.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, MainComponent, FriendsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatGridListModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    MatCardModule,
    MatDialog,
    MatTooltip,
    MatMenuItem
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
