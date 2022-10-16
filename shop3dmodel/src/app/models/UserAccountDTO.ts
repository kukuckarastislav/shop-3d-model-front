import { Address } from "./Address";

export class UserAccountDTO {
    constructor(
        public uuid: string = '',
		public name: string = '',
		public firstname: string = '',
		public lastname: string = '',
		public email: string = '',
		public averageGrade: number = -1,
		public numberOfProducts: number = 0,
		public averageResponseTimeMinutes: number = -1,
		public responseCountPercentage: number = -1,
		public biography: string = '',
		public address: Address = new Address(),
    ) {}
  }