export interface Env {
  production: boolean;
  env: 'dev' | 'prod';

  moralis: {
    /** Moralis Application ID */
    apiKey: string;
    /** Moralis Server url */
    secret: string;
    serverUrl: string;
  };
}

export const defaultEnv: Env = {
  production: false,
  env: 'dev',
  moralis: {
    apiKey: '',
    secret: '',
    serverUrl: ''
  }
};
