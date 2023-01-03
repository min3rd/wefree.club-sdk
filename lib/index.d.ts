import { AxiosResponse, AxiosStatic } from "axios";
import IClient from "./interface/IClient";
import { IConfig } from "./interface/IConfig";
import ICategoriesMetaResponse from "./models/ICategoriesMetaResponse.model";
import IAnimesMetaResponse from "./models/IAnimesMetaResponse.model";
import IAnimeMetaResponse from "./models/IAnimeMetaResponse.model";
import IEpisodesMetaResponse from "./models/IEpisodesMetaResponse.model";
import IEpisodeMetaResponse from "./models/IEpisodeMetaResponse.model";
export declare class Client implements IClient {
    http: AxiosStatic;
    config?: IConfig;
    constructor(config?: IConfig);
    setLocation(location: string): void;
    configure(config?: IConfig): IClient;
    acquireToken(): void;
    handle(response: AxiosResponse<any, any>): void;
    async_getCategories(page?: number, number?: number, location?: string): Promise<ICategoriesMetaResponse>;
    noAsync_getCategories(page?: number, number?: number, location?: string): Promise<AxiosResponse<any, any>>;
    async_getAnimesByCategoryId(categoryId: string, page?: number, number?: number, location?: string): Promise<IAnimesMetaResponse>;
    noAsync_getAnimesByCategoryId(categoryId: string, page?: number, number?: number, location?: string): any;
    async_getAnimeByAnimeId(animeId: string, location?: string): Promise<IAnimeMetaResponse>;
    noAsync_getAnimeByAnimeId(animeId: string, location?: string): any;
    async_getAnimesByQuery(query: string, page?: number, number?: number, location?: string): Promise<IAnimesMetaResponse>;
    noAsync_getAnimesByQuery(query: string, page?: number, number?: number, location?: string): any;
    async_getEpisodesByAnimeId(animeId: string, page?: number, number?: number, location?: string): Promise<IEpisodesMetaResponse>;
    noAsync_getEpisodesByAnimeId(animeId: string, page?: number, number?: number, location?: string): any;
    async_getEpisodeByEpisodeId(episodeId: string, location?: string): Promise<IEpisodeMetaResponse>;
    noAsync_getEpisodeByEpisodeId(episodeId: string, location?: string): any;
}
