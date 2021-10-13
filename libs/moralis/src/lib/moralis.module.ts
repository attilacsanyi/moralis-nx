import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Moralis } from 'moralis';

export interface MoralisOptions {
  moralisApiKey: string;
  moralisServerUrl: string;
  moralisSecret: string;
}

@NgModule({
  imports: [CommonModule]
})
export class MoralisModule {
  static forRoot({
    moralisApiKey,
    moralisServerUrl,
    moralisSecret
  }: MoralisOptions): ModuleWithProviders<MoralisModule> {
    // Initialise Moralis
    Moralis.enableEncryptedUser();
    Moralis.secret = moralisSecret;
    Moralis.initialize(moralisApiKey);
    Moralis.serverURL = moralisServerUrl;

    return {
      ngModule: MoralisModule,
      providers: []
    };
  }
}
