import { EntityImage } from "./EntityImage";
import { ProductDetails } from "./ProductDetails";

export class CreateNewProduct {
    constructor(
        public name: string = '',
        public price: number = 49,
        public description: string = '',
        public tags: string[] = [],
        public images: EntityImage[] = [],
        public category: string = '',
        public details: ProductDetails = new ProductDetails(),
    ) {}
  }