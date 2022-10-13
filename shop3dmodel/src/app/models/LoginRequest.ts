export class LoginRequest {
    constructor(
        public email: string = '',
        public password: string = '',
    ) { }

    validateProperty(): boolean {
        return this.email !== '' && this.password !== ''
    }

}