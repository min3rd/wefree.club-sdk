export interface IConfig {
    clientId?: string;
    secret?: string;
    host?: string;
    ssl?: boolean;
    apiVersion?: string;
}
export declare class Config implements IConfig {
    constructor(clientId?: string, secret?: string, host?: string, ssl?: boolean, apiVersion?: string);
}
