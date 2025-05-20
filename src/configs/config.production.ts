import getConfigs from "./config.common";

const baseUrl = "http://localhost:3000";
const mode = "production";

const configProduction = getConfigs({
  baseUrl,
  mode,
});

export default configProduction;
