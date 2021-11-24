export interface Cliente {
	_id : string | null,
	nombres : string,
	apellidos : string,
	identificacion : { 
		tipo : string,
		numero : number
	}
}
