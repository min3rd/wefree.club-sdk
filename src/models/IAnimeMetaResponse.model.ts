import { IAnime } from "./IAnime.model";
import IMeta from "./IMeta.model";

export default interface IAnimeMetaResponse {
    status?: number;
    message?: string;
    data?: IAnime;
    meta?: IMeta;
}