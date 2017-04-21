export class RootScope {
	loader: boolean;
	constructor() {
		this.loader = false; 
	}

	setLoader(data: boolean) {
		this.loader = data;
	}
}