import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Moralis } from 'moralis';

@Component({
  selector: 'mnx-user',
  template: `
    <!-- Show some user properties -->
    <ng-container *ngIf="user; else userNotDefined">
      <pre>
        <strong>Username:</strong>
        <span>{{ user.attributes.username }}</span>
      </pre>
      <pre>
        <strong>Address:</strong>
        <span>{{ user.attributes.ethAddress }}</span>
      </pre>
    </ng-container>

    <!-- No user -->
    <ng-template #userNotDefined>
      <pre>User not defined, please log in.</pre>
    </ng-template>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  @Input() user: Moralis.User | undefined;
}
