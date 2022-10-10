export class ProductPreview {
    constructor(
        public uuid: string = '',
        public name: string = '',
        public averageGrade: number = 0,
        public price: number = 0,
        public imageUrl: string = '',
        public category: string = '',
        public tags: string[] = [],
        public username: string = '',
        public userUuid: string = '',
        public userProfileImage: string = '',
        public saved: boolean = false,
    ) {}
  }