export class ApiRoute {
	public static get_categories(
		page: number = 0,
		number: number = 10
	): string {
		return `/categories?page=${page}&number=${number}`;
	}

	public static get_animes_by_category_id(
		categoryId: string,
		page: number = 0,
		number: number = 10
	): string {
		return `/categories/${categoryId}/animes?page=${page}&number=${number}`;
	}

	public static get_anime_by_anime_id(animeId: string): string {
		return `/animes/${animeId}`;
	}

	public static get_animes_by_query(
		query: string,
		page: number = 0,
		number: number = 10
	): string {
		return `/_search/animes?query=${query}&page=${page}&number=${number}`;
	}

	public static get_episodes_by_anime_id(
		animeId: string,
		page: number = 0,
		number: number = 0
	): string {
		return `/animes/${animeId}/episodes?page=${page}&number=${number}`;
	}

	public static get_episodes_by_episode_id(
		episodeId: string,
		page: number = 0,
		number: number = 0
	): string {
		return `/episodes/${episodeId}`;
	}
}
