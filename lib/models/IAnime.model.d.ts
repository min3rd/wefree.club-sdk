export interface IAnime {
    id?: string;
    name?: string;
    short_description?: string;
    description?: string;
    images?: string;
    source?: string;
    upcoming?: string;
    status?: number;
    created_at?: Date;
    updated_at?: Date;
    view_today?: number;
    view_week?: number;
    view_month?: number;
    view_year?: number;
    view_total?: number;
    genres?: string[];
}
