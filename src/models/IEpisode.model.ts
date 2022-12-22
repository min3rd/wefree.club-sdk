export interface IEpisode {
    id?: string;
    episode?: number;
    name?: string;
    short_desciption?: string;
    desciption?: string;
    images?: string;
    link?: string;
    status?: number;
    created_at?: Date;
    updated_at?: Date;
    view_today?: number;
    view_week?: number;
    view_month?: number;
    view_year?: number;
    view_total?: number;
}
