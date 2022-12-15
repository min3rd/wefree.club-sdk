"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRoute = void 0;
class ApiRoute {
    static get_categories(page = 0, number = 10) {
        return `/categories?page=${page}&number=${number}`;
    }
    static get_animes_by_category_id(categoryId, page = 0, number = 10) {
        return `/categories/${categoryId}/animes?page=${page}&number=${number}`;
    }
    static get_anime_by_anime_id(animeId) {
        return `/animes/${animeId}`;
    }
    static get_animes_by_query(query, page = 0, number = 10) {
        return `/_search/animes?query=${query}&page=${page}&number=${number}`;
    }
    static get_episodes_by_anime_id(animeId, page = 0, number = 0) {
        return `/animes/${animeId}/episodes?page=${page}&number=${number}`;
    }
    static get_episodes_by_episode_id(episodeId, page = 0, number = 0) {
        return `/episodes/${episodeId}`;
    }
}
exports.ApiRoute = ApiRoute;
