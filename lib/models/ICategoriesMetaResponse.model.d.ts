import { ICategory } from './ICategory.model';
import IMeta from './IMeta.model';
export default interface ICategoriesMetaResponse {
    status?: number;
    message?: string;
    data?: ICategory[];
    meta?: IMeta;
}
