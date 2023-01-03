"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRoute = void 0;
class ApiRoute {
    static get_categories(page = 0, number = 10, location = 'vn') {
        return `/categories?page=${page}&number=${number}&location=${location}`;
    }
    static get_animes_by_category_id(categoryId, page = 0, number = 10, location = 'vn') {
        return `/categories/${categoryId}/animes?page=${page}&number=${number}&location=${location}`;
    }
    static get_anime_by_anime_id(animeId, location = 'vn') {
        return `/animes/${animeId}?location=${location}`;
    }
    static get_animes_by_query(query, page = 0, number = 10, location = 'vn') {
        return `/_search/animes?query=${query}&page=${page}&number=${number}&location=${location}`;
    }
    static get_episodes_by_anime_id(animeId, page = 0, number = 0, location = 'vn') {
        return `/animes/${animeId}/episodes?page=${page}&number=${number}&location=${location}`;
    }
    static get_episodes_by_episode_id(episodeId, location = 'vn') {
        return `/episodes/${episodeId}&location=${location}`;
    }
}
exports.ApiRoute = ApiRoute;
