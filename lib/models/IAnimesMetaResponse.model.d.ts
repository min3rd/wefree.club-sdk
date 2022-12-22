import { IAnime } from "./IAnime.model";
import IMeta from "./IMeta.model";
export default interface IAnimesMetaResponse {
    status?: number;
    message?: string;
    data?: IAnime[];
    meta?: IMeta;
}
