import { ProductPreview } from "./ProductPreview";
import { UserAccountDTO } from "./UserAccountDTO";

export class Purchase {
    constructor(
        public uuid: string = '',
        public date: Date = new Date(),
        public amount: number = 0,
        public originalPrice: number = 0,
        public purchasedPrice: number = 0,
        public buyer: UserAccountDTO = new UserAccountDTO(),
        public seller: UserAccountDTO = new UserAccountDTO(),
        public productPreviewDTO: ProductPreview = new ProductPreview(),
    ) {}
  }