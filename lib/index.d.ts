import { AxiosResponse, AxiosStatic } from "axios";
import IClient from "./interface/IClient";
import { IConfig } from "./interface/IConfig";
import { IAnime } from "./models/IAnime.model";
import { ICategory } from "./models/ICategory.model";
import { IEpisode } from "./models/IEpisode.model";
export declare class Client implements IClient {
    http: AxiosStatic;
    config?: IConfig;
    constructor(config?: IConfig);
    configure(config?: IConfig): IClient;
    acquireToken(): void;
    handle(response: AxiosResponse<any, any>): void;
    async_getCategories(page?: number, number?: number): Promise<ICategory[]>;
    noAsync_getCategories(resolve: Function, page: number, number: number, reject?: Function): void;
    async_getAnimesByCategoryId(categoryId: string, page?: number, number?: number): Promise<IAnime[]>;
    noAsync_getAnimesByCategoryId(categoryId: string, resolve: Function, page?: number, number?: number, reject?: Function): void;
    async_getAnimeByAnimeId(animeId: string): Promise<IAnime>;
    noAsync_getAnimeByAnimeId(animeId: string, resolve: Function, reject?: Function): void;
    async_getAnimesByQuery(query: string, page?: number, number?: number): Promise<IAnime[]>;
    noAsync_getAnimesByQuery(query: string, resolve: Function, page?: number, number?: number, reject?: Function): void;
    async_getEpisodesByAnimeId(animeId: string, page: number, number: number): Promise<IEpisode[]>;
    noAsync_getEpisodesByAnimeId(animeId: string, resolve: Function, page?: number, number?: number, reject?: Function): void;
    async_getEpisodeByEpisodeId(episodeId: string): Promise<IEpisode>;
    noAsync_getEpisodeByEpisodeId(episodeId: string, resolve: Function, reject?: Function): void;
}
