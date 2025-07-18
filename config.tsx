type Env = 'development' | 'staging' | 'production';

interface ApiConfig {
  baseUrl: string;
}

interface AppConfig {
  baseUrl: string;
  api: ApiConfig;
}

type ConfigMap = Record<Env, AppConfig>;

const config: ConfigMap = {
  development: {
    baseUrl: "http://doodlebluelive.com:2057/api/",
    api: {
      baseUrl: "http://doodlebluelive.com:2057/api/",
    },
  },
  staging: {
    baseUrl: "http://doodlebluelive.com:2057/api/",
    api: {
      baseUrl: "http://doodlebluelive.com:2057/api/",
    },
  },
  production: {
    baseUrl: "http://doodlebluelive.com:2057/api/",
    api: {
      baseUrl: "http://doodlebluelive.com:2057/api/",
    },
  },
};
 
const env = (process.env.NEXT_PUBLIC_ENV_VARIABLE as Env) || 'development';

const configBasedOnEnv: AppConfig = config[env] ?? config.development;

export default configBasedOnEnv;
