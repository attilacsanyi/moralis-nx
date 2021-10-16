import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MoralisModule } from '@moralis-nx/moralis';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
@NgModule({
  declarations: [AppComponent, UserComponent],
  imports: [
    BrowserModule,
    MoralisModule.forRoot({
      appId: environment.moralis.appId,
      serverUrl: environment.moralis.serverUrl
    }),
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
