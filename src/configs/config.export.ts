import configLocal from "./config.local";
import configProduction from "./config.production";

const Config = () => {
  switch (process.env.NODE_ENV) {
    case "test":
      return configLocal;
    case "development":
      return configLocal;
    case "production":
      return configProduction;
    default:
      return configLocal;
  }
};

export default Config;
