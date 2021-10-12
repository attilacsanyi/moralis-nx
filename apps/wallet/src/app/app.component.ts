import { Component } from '@angular/core';
import { Moralis } from 'moralis';
import { BehaviorSubject, from, ReplaySubject } from 'rxjs';
import { first, map, share } from 'rxjs/operators';

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wallet';

  private currentUserSubject = new BehaviorSubject(Moralis.User.current());
  private currentUser$ = this.currentUserSubject.asObservable().pipe(
    map(user => (user === undefined ? null : user)),
    share({
      connector: () => new ReplaySubject(1),
      resetOnError: false,
      resetOnComplete: false,
      resetOnRefCountZero: false
    })
  );
  user$ = this.currentUser$;
  userLoggedIn$ = this.currentUser$.pipe(map(user => !!user));

  loginWithMetamask() {
    from(Moralis.Web3.authenticate())
      .pipe(first())
      .subscribe({
        next: loggedInUser => {
          console.log('loggedInUser', loggedInUser);
          this.currentUserSubject.next(loggedInUser);
        },
        error: (error: Error) => this.logError('loginWithMetamask error', error)
      });
  }

  loginWithWalletConnect() {
    from(Moralis.Web3.authenticate({ provider: 'walletconnect' }))
      .pipe(first())
      .subscribe({
        next: loggedInUser => {
          console.log('loggedInUser', loggedInUser);
          this.currentUserSubject.next(loggedInUser);
        },
        error: (error: Error) =>
          this.logError('loginWithWalletConnect error', error)
      });
  }

  logout() {
    from(Moralis.User.logOut())
      .pipe(first())
      .subscribe(loggedOutUser => {
        console.log('logout', loggedOutUser);
        this.currentUserSubject.next(undefined);

        // Disconnect Web3 wallet
        Moralis.Web3.cleanup();
      });
  }

  private getError(e: unknown) {
    return e as { code: number; message: string };
  }

  private logError(message: string, e: Error) {
    const error = this.getError(e);
    console.error(`${message}: ` + error.code + ' ' + error.message);
  }
}
