import { IEpisode } from "./IEpisode.model";
import IMeta from "./IMeta.model";

export default interface IEpisodeMetaResponse {
    status?: number;
    message?: string;
    data?: IEpisode;
    meta?: IMeta;
}