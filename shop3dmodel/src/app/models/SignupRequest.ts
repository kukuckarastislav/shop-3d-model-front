import { Address } from "./Address"

export class SignupRequest {
    constructor(
        public email: string = '',
        public password: string = '',
        public confirmPassword: string = '',
        public name: string = 'Username',
        public firstname: string = '',
        public lastname: string = '',
        public birthday: Date = new Date(),
        public address: Address = new Address(),
    ) { }

    validateProperty(): boolean {
        return this.email !== '' &&
            this.password !== '' &&
            this.firstname !== '' &&
            this.lastname !== '' &&
            this.birthday !== null
    }

    validatePassword(): boolean {
        return this.password === this.confirmPassword
    }

}