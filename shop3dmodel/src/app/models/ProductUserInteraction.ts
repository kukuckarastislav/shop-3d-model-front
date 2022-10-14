export class ProductUserInteraction {
    constructor(
        public user_uuid: string = '',
        public product_uuid: string = '',
        public liked: boolean = false,
        public saved: boolean = false,
        public purchased: boolean = false,
        public reviewed: boolean = false,
    ) {}
  }