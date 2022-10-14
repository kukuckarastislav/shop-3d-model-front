export class NewCommentReply {
    constructor(
        public user_uuid: string = '',
        public product_uuid: string = '',
        public comment_uuid: string = '',
        public creatorReply: string = '',
    ) {}
}
  