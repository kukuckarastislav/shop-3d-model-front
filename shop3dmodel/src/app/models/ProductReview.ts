import {UserAccountDTO} from './UserAccountDTO';

export class ProductReview {
    constructor(
        public uuid: string = '',
        public date: Date = new Date(),
        public grade: number = 0,
        public comment: string = '',
        public userAccount: UserAccountDTO = new UserAccountDTO(),
    ) {}
  }