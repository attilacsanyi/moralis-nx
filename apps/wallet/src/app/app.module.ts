import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MoralisModule } from '@moralis-nx/moralis';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

export const materialModules = [
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule
];

@NgModule({
  declarations: [AppComponent, UserComponent],
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,

    // Moralis
    MoralisModule.forRoot({
      appId: environment.moralis.appId,
      serverUrl: environment.moralis.serverUrl
    }),
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),

    // Material
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
