import IMeta from "./IMeta.model";
export default interface IMetaResponse {
    status?: number;
    message?: string;
    data?: any;
    meta?: IMeta;
}
