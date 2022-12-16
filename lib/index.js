"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const api_route_1 = require("./common/api.route");
const axios_1 = __importDefault(require("axios"));
function default_reject(e) {
    console.error(e);
}
class Client {
    constructor(config) {
        this.http = axios_1.default;
        this.configure(config);
    }
    configure(config) {
        var _a;
        this.config = {
            clientId: (config === null || config === void 0 ? void 0 : config.clientId) || "",
            secret: (config === null || config === void 0 ? void 0 : config.secret) || "",
            host: (config === null || config === void 0 ? void 0 : config.host) || "v2.wefree.club",
            ssl: (config === null || config === void 0 ? void 0 : config.ssl) || false,
            apiVersion: (config === null || config === void 0 ? void 0 : config.apiVersion) || "v2",
        };
        this.http.defaults.baseURL =
            (!this.config.ssl ? "http://" : "https://") +
                `${(_a = this.config) === null || _a === void 0 ? void 0 : _a.host}/api/${this.config.apiVersion}`;
        this.http.interceptors.request.use((config) => {
            var _a, _b;
            config.headers = {
                clientId: `${(_a = this.config) === null || _a === void 0 ? void 0 : _a.clientId}`,
                secret: `${(_b = this.config) === null || _b === void 0 ? void 0 : _b.secret}`,
            };
            return config;
        }, (error) => {
            return Promise.reject(error);
        });
        return this;
    }
    acquireToken() { }
    handle(response) {
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
    async_getCategories(page = 0, number = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = yield Promise.resolve(api_route_1.ApiRoute.get_categories(page, number));
            const response = yield this.http.get(url);
            this.handle(response);
            return response.data;
        });
    }
    noAsync_getCategories(page = 0, number = 10) {
        return this.http.get(api_route_1.ApiRoute.get_categories(page, number));
    }
    async_getAnimesByCategoryId(categoryId, page = 0, number = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = yield Promise.resolve(api_route_1.ApiRoute.get_animes_by_category_id(categoryId, page, number));
            const response = yield this.http.get(url);
            this.handle(response);
            return response.data;
        });
    }
    noAsync_getAnimesByCategoryId(categoryId, page = 0, number = 10) {
        return this.http.get(api_route_1.ApiRoute.get_animes_by_category_id(categoryId, page, number));
    }
    async_getAnimeByAnimeId(animeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = yield Promise.resolve(api_route_1.ApiRoute.get_anime_by_anime_id(animeId));
            const response = yield this.http.get(url);
            this.handle(response);
            return response.data;
        });
    }
    noAsync_getAnimeByAnimeId(animeId) {
        return this.http.get(api_route_1.ApiRoute.get_anime_by_anime_id(animeId));
    }
    async_getAnimesByQuery(query, page = 0, number = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = yield Promise.resolve(api_route_1.ApiRoute.get_animes_by_query(query, page, number));
            const response = yield this.http.get(url);
            this.handle(response);
            return response.data;
        });
    }
    noAsync_getAnimesByQuery(query, page = 0, number = 10) {
        return this.http.get(api_route_1.ApiRoute.get_animes_by_query(query, page, number));
    }
    async_getEpisodesByAnimeId(animeId, page, number) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = yield Promise.resolve(api_route_1.ApiRoute.get_episodes_by_anime_id(animeId, page, number));
            const response = yield this.http.get(url);
            this.handle(response);
            return response.data;
        });
    }
    noAsync_getEpisodesByAnimeId(animeId, page = 0, number = 10) {
        return this.http.get(api_route_1.ApiRoute.get_episodes_by_anime_id(animeId, page, number));
    }
    async_getEpisodeByEpisodeId(episodeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = yield Promise.resolve(api_route_1.ApiRoute.get_episodes_by_episode_id(episodeId));
            const response = yield this.http.get(url);
            this.handle(response);
            return response.data;
        });
    }
    noAsync_getEpisodeByEpisodeId(episodeId) {
        return this.http.get(api_route_1.ApiRoute.get_episodes_by_episode_id(episodeId));
    }
}
exports.Client = Client;
