export class NewProductReview {
    constructor(
        public grade: number = 0,
        public comment: string = '',
        public user_uuid: string = '',
        public product_uuid: string = '',
    ) {}
  }