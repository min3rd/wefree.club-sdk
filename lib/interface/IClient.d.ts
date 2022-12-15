import { ICategory } from "./../models/ICategory.model";
import { IEpisode } from "./../models/IEpisode.model";
import { IAnime } from "./../models/IAnime.model";
import { IConfig } from "./IConfig";
import { AxiosResponse } from "axios";
export default interface IClient {
    config?: IConfig;
    configure(config: IConfig): IClient;
    handle(response: AxiosResponse): void;
    acquireToken(): void;
    async_getCategories(page: number, number: number): Promise<ICategory[]>;
    noAsync_getCategories(resolve: Function, page: number, number: number, reject: Function): void;
    async_getAnimesByCategoryId(categoryId: string, page: number, number: number): Promise<IAnime[]>;
    noAsync_getAnimesByCategoryId(categoryId: string, resolve: Function, page: number, number: number, reject: Function): void;
    async_getAnimeByAnimeId(animeId: string): Promise<IAnime>;
    noAsync_getAnimeByAnimeId(animeId: string, resolve: Function, reject: Function): void;
    async_getAnimesByQuery(query: string, page: number, number: number): Promise<IAnime[]>;
    noAsync_getAnimesByQuery(query: string, resolve: Function, page: number, number: number, reject: Function): void;
    async_getEpisodesByAnimeId(animeId: string, page: number, number: number): Promise<IEpisode[]>;
    noAsync_getEpisodesByAnimeId(animeId: string, resolve: Function, page: number, number: number, reject: Function): void;
    async_getEpisodeByEpisodeId(episodeId: string): Promise<IEpisode>;
    noAsync_getEpisodeByEpisodeId(episodeId: string, resolve: Function, reject: Function): void;
}
