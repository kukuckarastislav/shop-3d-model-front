import {UserAccountDTO} from './UserAccountDTO';

export class ProductComment {
    constructor(
        public uuid: string = '',
        public date: Date = new Date(),
        public comment: string = '',
        public creatorReply: string = '',
        public userAccount: UserAccountDTO = new UserAccountDTO(),
    ) {}
  }