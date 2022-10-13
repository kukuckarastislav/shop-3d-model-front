export class LoginResponse {
    constructor(
        public role: string = '',
        public accessToken: string = '',
        public expiresIn: number = 0,
        public email: string = '',
        public uuid: string = '',
        public name: string = '',
        public firstname: string = '',
        public lastname: string = '',
    ) {}
}
  