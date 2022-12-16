import { AxiosResponse, AxiosStatic } from "axios";
import IClient from "./interface/IClient";
import { IConfig } from "./interface/IConfig";
import IMetaResponse from "./models/IMetaResponse.model";
export declare class Client implements IClient {
    http: AxiosStatic;
    config?: IConfig;
    constructor(config?: IConfig);
    configure(config?: IConfig): IClient;
    acquireToken(): void;
    handle(response: AxiosResponse<any, any>): void;
    async_getCategories(page?: number, number?: number): Promise<IMetaResponse>;
    noAsync_getCategories(page?: number, number?: number): Promise<AxiosResponse<any, any>>;
    async_getAnimesByCategoryId(categoryId: string, page?: number, number?: number): Promise<IMetaResponse>;
    noAsync_getAnimesByCategoryId(categoryId: string, page?: number, number?: number): any;
    async_getAnimeByAnimeId(animeId: string): Promise<IMetaResponse>;
    noAsync_getAnimeByAnimeId(animeId: string): any;
    async_getAnimesByQuery(query: string, page?: number, number?: number): Promise<IMetaResponse>;
    noAsync_getAnimesByQuery(query: string, page?: number, number?: number): any;
    async_getEpisodesByAnimeId(animeId: string, page: number, number: number): Promise<IMetaResponse>;
    noAsync_getEpisodesByAnimeId(animeId: string, page?: number, number?: number): any;
    async_getEpisodeByEpisodeId(episodeId: string): Promise<IMetaResponse>;
    noAsync_getEpisodeByEpisodeId(episodeId: string): any;
}
