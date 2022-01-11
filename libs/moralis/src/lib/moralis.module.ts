import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Moralis } from 'moralis';

export interface MoralisOptions {
  serverUrl: string;
  appId: string;
  plugins?: { name: string; functions: string[] }[];
  javascriptKey?: string;
  masterKey?: string;
}

@NgModule({
  imports: [CommonModule]
})
export class MoralisModule {
  static forRoot(options: MoralisOptions): ModuleWithProviders<MoralisModule> {
    // Initialise Moralis
    Moralis.start(options).then(() =>
      console.info('Moralis has been initialised.')
    );

    return {
      ngModule: MoralisModule,
      providers: []
    };
  }
}
