import { ApiRoute } from "./common/api.route";
import axios, { AxiosResponse, AxiosStatic } from "axios";
import IClient from "./interface/IClient";
import { IConfig } from "./interface/IConfig";
import { IAnime } from "./models/IAnime.model";
import { ICategory } from "./models/ICategory.model";
import { IEpisode } from "./models/IEpisode.model";
function default_reject(e: any) {
	console.error(e);
}
export class Client implements IClient {
	http: AxiosStatic = axios;
	config?: IConfig;
	constructor(config?: IConfig) {
		this.configure(config);
	}
	configure(config?: IConfig): IClient {
		this.config = {
			clientId: config?.clientId || "",
			secret: config?.secret || "",
			host: config?.host || "v2.wefree.club",
			ssl: config?.ssl || true,
			apiVersion: config?.apiVersion || "v2",
		};
		this.http.defaults.baseURL = !this.config.ssl
			? "http://"
			: "https://" +
			  `${this.config?.host}/api/${this.config.apiVersion}`;
		return this;
	}
	handle(response: AxiosResponse<any, any>): void {
		if (response.status == 400) {
			throw new Error("Bad request");
		}
		if (response.status == 404) {
			throw new Error("API not found");
		}
		if (response.status == 500) {
			throw new Error("Internal Error");
		}
		if (response.status != 200) {
			throw new Error("Unexpected Error");
		}
	}
	async async_getCategories(
		page: number = 0,
		number: number = 10
	): Promise<ICategory[]> {
		const url = await Promise.resolve(
			ApiRoute.get_categories(page, number)
		);
		const response = await this.http.get(url);
		this.handle(response);
		return response.data;
	}
	noAsync_getCategories(
		resolve: Function,
		page: number,
		number: number,
		reject: Function = default_reject
	): void {
		this.http
			.get(ApiRoute.get_categories(page, number))
			.then((response) => {
				resolve(response.data);
			})
			.catch((e) => {
				reject(e);
			});
	}
	async async_getAnimesByCategoryId(
		categoryId: string,
		page: number = 0,
		number: number = 10
	): Promise<IAnime[]> {
		const url = await Promise.resolve(
			ApiRoute.get_animes_by_category_id(categoryId, page, number)
		);
		const response = await this.http.get(url);
		this.handle(response);
		return response.data;
	}
	noAsync_getAnimesByCategoryId(
		categoryId: string,
		resolve: Function,
		page: number = 0,
		number: number = 10,
		reject: Function = default_reject
	): void {
		this.http
			.get(ApiRoute.get_animes_by_category_id(categoryId, page, number))
			.then((response) => {
				resolve(response);
			})
			.catch((e) => reject(e));
	}
	async async_getAnimeByAnimeId(animeId: string): Promise<IAnime> {
		const url = await Promise.resolve(
			ApiRoute.get_anime_by_anime_id(animeId)
		);
		const response = await this.http.get(url);
		this.handle(response);
		return response.data;
	}
	noAsync_getAnimeByAnimeId(
		animeId: string,
		resolve: Function,
		reject: Function = default_reject
	): void {
		this.http
			.get(ApiRoute.get_anime_by_anime_id(animeId))
			.then((r) => resolve(r))
			.catch((e) => reject(e));
	}
	async async_getAnimesByQuery(
		query: string,
		page: number = 0,
		number: number = 10
	): Promise<IAnime[]> {
		const url = await Promise.resolve(
			ApiRoute.get_animes_by_query(query, page, number)
		);
		const response = await this.http.get(url);
		this.handle(response);
		return response.data;
	}
	noAsync_getAnimesByQuery(
		query: string,
		resolve: Function,
		page: number = 0,
		number: number = 10,
		reject: Function = default_reject
	): void {
		this.http
			.get(ApiRoute.get_animes_by_query(query, page, number))
			.then((r) => resolve(r))
			.catch((e) => reject(e));
	}
	async async_getEpisodesByAnimeId(
		animeId: string,
		page: number,
		number: number
	): Promise<IEpisode[]> {
		const url = await Promise.resolve(
			ApiRoute.get_episodes_by_anime_id(animeId, page, number)
		);
		const response = await this.http.get(url);
		this.handle(response);
		return response.data;
	}
	noAsync_getEpisodesByAnimeId(
		animeId: string,
		resolve: Function,
		page: number = 0,
		number: number = 10,
		reject: Function = default_reject
	): void {
		this.http
			.get(ApiRoute.get_episodes_by_anime_id(animeId, page, number))
			.then((r) => resolve(r))
			.catch((e) => reject(e));
	}
	async async_getEpisodeByEpisodeId(episodeId: string): Promise<IEpisode> {
		const url = await Promise.resolve(
			ApiRoute.get_episodes_by_episode_id(episodeId)
		);
		const response = await this.http.get(url);
		this.handle(response);
		return response.data;
	}
	noAsync_getEpisodeByEpisodeId(
		episodeId: string,
		resolve: Function,
		reject: Function = default_reject
	): void {
		this.http
			.get(ApiRoute.get_episodes_by_episode_id(episodeId))
			.then((r) => resolve(r))
			.catch((e) => reject(e));
	}
}
