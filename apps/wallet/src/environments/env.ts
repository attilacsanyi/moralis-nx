export interface Env {
  production: boolean;
  env: 'dev' | 'prod';

  moralis: {
    /** Moralis Application ID */
    appId: string;
    /** Moralis Server url */
    serverUrl: string;
  };
}

export const defaultEnv: Env = {
  production: false,
  env: 'dev',
  moralis: {
    appId: 'iLy87JVPEI6bGBRPHXScaB6kggBsgvbome1RgqW6',
    serverUrl: 'https://cjqaddie5gbb.grandmoralis.com:2053/server'
  }
};
