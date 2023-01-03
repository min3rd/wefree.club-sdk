export declare class ApiRoute {
    static get_categories(page?: number, number?: number, location?: string): string;
    static get_animes_by_category_id(categoryId: string, page?: number, number?: number, location?: string): string;
    static get_anime_by_anime_id(animeId: string, location?: string): string;
    static get_animes_by_query(query: string, page?: number, number?: number, location?: string): string;
    static get_episodes_by_anime_id(animeId: string, page?: number, number?: number, location?: string): string;
    static get_episodes_by_episode_id(episodeId: string, location?: string): string;
}
