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
    appId: 'kRk92GrSHxsl9WySp3nCmO6TbpV7rY7gb1MIONS6',
    serverUrl: 'https://gcnfwjhv70zi.grandmoralis.com:2053/server'
  }
};
