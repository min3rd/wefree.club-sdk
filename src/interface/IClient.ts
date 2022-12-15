import { IConfig } from "./IConfig";
import { AxiosResponse } from "axios";
import IMetaResponse from "../models/IMetaResponse.model";
export default interface IClient {
	config?: IConfig;
	configure(config: IConfig): IClient;
	handle(response: AxiosResponse): void;
	acquireToken(): void;
	async_getCategories(page: number, number: number): Promise<IMetaResponse>;
	noAsync_getCategories(page: number, number: number): any;
	async_getAnimesByCategoryId(
		categoryId: string,
		page: number,
		number: number
	): Promise<IMetaResponse>;
	noAsync_getAnimesByCategoryId(
		categoryId: string,
		page: number,
		number: number
	): any;
	async_getAnimeByAnimeId(animeId: string): Promise<IMetaResponse>;
	noAsync_getAnimeByAnimeId(animeId: string): any;
	async_getAnimesByQuery(
		query: string,
		page: number,
		number: number
	): Promise<IMetaResponse>;
	noAsync_getAnimesByQuery(query: string, page: number, number: number): any;
	async_getEpisodesByAnimeId(
		animeId: string,
		page: number,
		number: number
	): Promise<IMetaResponse>;
	noAsync_getEpisodesByAnimeId(
		animeId: string,
		page: number,
		number: number
	): any;
	async_getEpisodeByEpisodeId(episodeId: string): Promise<IMetaResponse>;
	noAsync_getEpisodeByEpisodeId(episodeId: string): any;
}
