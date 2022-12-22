import { IEpisode } from './../../lib/src/models/IEpisode.model.d';
import IMeta from './IMeta.model';
export default interface IEpisodesMetaResponse {
    status?: number;
    message?: string;
    data?: IEpisode[];
    meta?: IMeta;
}
