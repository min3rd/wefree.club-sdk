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
    configure(config?: IConfig): IClient;
    acquireToken(): void;
    handle(response: AxiosResponse<any, any>): void;
    async_getCategories(page?: number, number?: number): Promise<ICategoriesMetaResponse>;
    noAsync_getCategories(page?: number, number?: number): Promise<AxiosResponse<any, any>>;
    async_getAnimesByCategoryId(categoryId: string, page?: number, number?: number): Promise<IAnimesMetaResponse>;
    noAsync_getAnimesByCategoryId(categoryId: string, page?: number, number?: number): any;
    async_getAnimeByAnimeId(animeId: string): Promise<IAnimeMetaResponse>;
    noAsync_getAnimeByAnimeId(animeId: string): any;
    async_getAnimesByQuery(query: string, page?: number, number?: number): Promise<IAnimesMetaResponse>;
    noAsync_getAnimesByQuery(query: string, page?: number, number?: number): any;
    async_getEpisodesByAnimeId(animeId: string, page: number, number: number): Promise<IEpisodesMetaResponse>;
    noAsync_getEpisodesByAnimeId(animeId: string, page?: number, number?: number): any;
    async_getEpisodeByEpisodeId(episodeId: string): Promise<IEpisodeMetaResponse>;
    noAsync_getEpisodeByEpisodeId(episodeId: string): any;
}
