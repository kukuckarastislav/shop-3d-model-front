export class AdvanceSearch {
    constructor(
        public productName: string = '',
        public category: string = 'All',
        public tags: string[] = [],
        public userName: string = '',
    
        public gradeFrom: number = 0,
        public gradeTo: number = 5,
    
        public priceFrom: number = 0,
        public priceTo: number = 100000,
        public free: boolean = false,
    
        public sortType: string = 'NONE',
    ) {}
  }