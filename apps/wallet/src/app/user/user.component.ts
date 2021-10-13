import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Moralis } from 'moralis';

@Component({
  selector: 'mnx-user',
  template: `
    <h2>User</h2>
    <details>
      <summary>User</summary>
      <pre>{{ user | json }}</pre>
    </details>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  @Input() user: Moralis.User | undefined;
}
