import { ApiRoute } from "./common/api.route";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosStatic } from "axios";
import IClient from "./interface/IClient";
import { IConfig } from "./interface/IConfig";
import ICategoriesMetaResponse from "./models/ICategoriesMetaResponse.model";
import IAnimesMetaResponse from "./models/IAnimesMetaResponse.model";
import IAnimeMetaResponse from "./models/IAnimeMetaResponse.model";
import IEpisodesMetaResponse from "./models/IEpisodesMetaResponse.model";
import IEpisodeMetaResponse from "./models/IEpisodeMetaResponse.model";

export class Client implements IClient {
    http: AxiosStatic = axios;
    config?: IConfig;
    constructor(config?: IConfig) {
        this.configure(config);
    }
    setLocation(location: string): void {
        if (!this.config) {
            this.config = {
                clientId: "",
                secret: "",
                host: "v2.wefree.club",
                ssl: true,
                apiVersion: "v2",
                location: "vn",
            }
        }
        this.config.location = location;
    }
    configure(config?: IConfig): IClient {
        this.config = {
            clientId: config?.clientId || "",
            secret: config?.secret || "",
            host: config?.host || "v2.wefree.club",
            ssl: config?.ssl || false,
            apiVersion: config?.apiVersion || "v2",
            location: config?.location || "vn",
        };
        this.http.defaults.baseURL =
            (!this.config.ssl ? "http://" : "https://") +
            `${this.config?.host}/api/${this.config.apiVersion}`;
        this.http.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                config.headers = {
                    clientId: `${this.config?.clientId}`,
                    secret: `${this.config?.secret}`,
                };
                return config;
            },
            (error: any) => {
                return Promise.reject(error);
            }
        );
        return this;
    }
    acquireToken(): void { }
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
        number: number = 10,
        location = ""
    ): Promise<ICategoriesMetaResponse> {
        const url = await Promise.resolve(
            ApiRoute.get_categories(page, number, !location ? this.config?.location : location)
        );
        const response = await this.http.get(url);
        this.handle(response);
        return response.data;
    }
    noAsync_getCategories(
        page: number = 0,
        number: number = 10,
        location = ""
    ): Promise<AxiosResponse<any, any>> {
        return this.http.get(ApiRoute.get_categories(page, number, !location ? this.config?.location : location));
    }
    async async_getAnimesByCategoryId(
        categoryId: string,
        page: number = 0,
        number: number = 10,
        location = ""
    ): Promise<IAnimesMetaResponse> {
        const url = await Promise.resolve(
            ApiRoute.get_animes_by_category_id(categoryId, page, number, !location ? this.config?.location : location)
        );
        const response = await this.http.get(url);
        this.handle(response);
        return response.data;
    }
    noAsync_getAnimesByCategoryId(
        categoryId: string,
        page: number = 0,
        number: number = 10,
        location = ""
    ): any {
        return this.http.get(
            ApiRoute.get_animes_by_category_id(categoryId, page, number, !location ? this.config?.location : location)
        );
    }
    async async_getAnimeByAnimeId(animeId: string, location = ""): Promise<IAnimeMetaResponse> {
        const url = await Promise.resolve(
            ApiRoute.get_anime_by_anime_id(animeId, !location ? this.config?.location : location)
        );
        const response = await this.http.get(url);
        this.handle(response);
        return response.data;
    }
    noAsync_getAnimeByAnimeId(animeId: string, location = ""): any {
        return this.http.get(ApiRoute.get_anime_by_anime_id(animeId, !location ? this.config?.location : location));
    }
    async async_getAnimesByQuery(
        query: string,
        page: number = 0,
        number: number = 10,
        location = ""
    ): Promise<IAnimesMetaResponse> {
        const url = await Promise.resolve(
            ApiRoute.get_animes_by_query(query, page, number, !location ? this.config?.location : location)
        );
        const response = await this.http.get(url);
        this.handle(response);
        return response.data;
    }
    noAsync_getAnimesByQuery(
        query: string,
        page: number = 0,
        number: number = 10,
        location = ""
    ): any {
        return this.http.get(ApiRoute.get_animes_by_query(query, page, number, !location ? this.config?.location : location));
    }
    async async_getEpisodesByAnimeId(
        animeId: string,
        page: number = 0,
        number: number = 10,
        location = ""
    ): Promise<IEpisodesMetaResponse> {
        const url = await Promise.resolve(
            ApiRoute.get_episodes_by_anime_id(animeId, page, number, !location ? this.config?.location : location)
        );
        const response = await this.http.get(url);
        this.handle(response);
        return response.data;
    }
    noAsync_getEpisodesByAnimeId(
        animeId: string,
        page: number = 0,
        number: number = 10,
        location = ""
    ): any {
        return this.http.get(
            ApiRoute.get_episodes_by_anime_id(animeId, page, number, !location ? this.config?.location : location)
        );
    }
    async async_getEpisodeByEpisodeId(
        episodeId: string,
        location = ""
    ): Promise<IEpisodeMetaResponse> {
        const url = await Promise.resolve(
            ApiRoute.get_episodes_by_episode_id(episodeId, !location ? this.config?.location : location)
        );
        const response = await this.http.get(url);
        this.handle(response);
        return response.data;
    }
    noAsync_getEpisodeByEpisodeId(episodeId: string, location = ""): any {
        return this.http.get(ApiRoute.get_episodes_by_episode_id(episodeId, !location ? this.config?.location : location));
    }
}
