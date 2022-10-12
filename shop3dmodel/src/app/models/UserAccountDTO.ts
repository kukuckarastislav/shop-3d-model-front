export class UserAccountDTO {
    constructor(
        public uuid: string = '',
		public name: string = '',
		public firstname: string = '',
		public lastname: string = '',
		public email: string = '',
		public averageGrade: number = -1,
		public averageResponseTimeMinutes: number = -1,
		public responseCountPercentage: number = -1,
    ) {}
  }