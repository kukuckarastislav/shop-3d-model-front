import { EntityImage } from './EntityImage';
import { ProductCategory } from './ProductCategory';
import { ProductReview } from './ProductReview';
import { UserAccountDTO } from './UserAccountDTO';
import { ProductDetails } from './ProductDetails';
import { ProductComment } from './ProductComment';

export class Product {
    constructor(
        public uuid: string = '',
        public name: string = '',
        public averageGrade: number = 0,
        public price: number = 0,
        public publishDate: Date = new Date(),
        public description: string = '',
        public numberOfViews: number = 0,
        public numberOfLikes: number = 0,
        public saved: boolean = false,
        public tags: string[] = [],

        public creator: UserAccountDTO = new UserAccountDTO(),
        public images: EntityImage[] = [],
        public comments: ProductComment[] = [],
        public reviews: ProductReview[] = [],
        public category: ProductCategory = new ProductCategory(),
        public details: ProductDetails = new ProductDetails(),
    ) {}
  }