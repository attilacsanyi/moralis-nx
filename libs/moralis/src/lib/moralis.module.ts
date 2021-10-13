import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Moralis } from 'moralis';

export interface MoralisOptions {
  moralisAppId: string;
  moralisServerUrl: string;
}

@NgModule({
  imports: [CommonModule]
})
export class MoralisModule {
  static forRoot({
    moralisAppId,
    moralisServerUrl
  }: MoralisOptions): ModuleWithProviders<MoralisModule> {
    // Initialise Moralis
    Moralis.initialize(moralisAppId);
    Moralis.serverURL = moralisServerUrl;

    return {
      ngModule: MoralisModule,
      providers: []
    };
  }
}
