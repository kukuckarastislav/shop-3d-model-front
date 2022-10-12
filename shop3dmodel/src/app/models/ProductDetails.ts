export class ProductDetails {
    constructor(
        public animated : boolean = false,
		public rigged : boolean = false,
		public textured : boolean = false,
		public pbr : boolean = false,
		public numberOfMaterials : number = 0,
		public numberOfVertices : number = 0,
		public numberOfPolygons : number = 0,
		public numberOfFiles : number = 0,
    ) {}
}