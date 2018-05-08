export interface IConfig {
    serviceUrl: string;
    clang: string;
    rustc: string;
    templates: string;
}
export default function getConfig(): Promise<IConfig>;
