export declare namespace ICommonConfig {
  export type Mode = "local" | "development" | "production";

  export interface Params {
    baseUrl: string;
    mode: Mode;
  }
}

export default function getConfigs(params: ICommonConfig.Params) {
  const {baseUrl, mode} = params;

  // 공통으로 반환되는 구조
  return {
    baseUrl,
    mode,
  };
}
