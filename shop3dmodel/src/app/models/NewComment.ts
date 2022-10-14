export class NewComment {
    constructor(
        public user_uuid: string = '',
        public product_uuid: string = '',
        public comment: string = '',
    ) {}
}
  