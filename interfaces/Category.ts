// eslint-disable-next-line import/no-unresolved
import SubCategory from './SubCategory';

export default interface Category {
    id: number;
    name: string;
    subCategories: SubCategory[];
// eslint-disable-next-line semi
}
