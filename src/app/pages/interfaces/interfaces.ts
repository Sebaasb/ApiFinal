//Api Feriados
export interface RespuestaFeriados {
	status: string;
	data: Data[];
}

export interface Data {
	date: string;
	title: string;
	type: string;
	inalienable: boolean;
	extra: string;
}

//Json usuarios, docentes
export interface IDocentes {
	id: number;
	nombre: string;
	email: string;
	password: string;
	asignaturas: Asignatura[];
}

export interface IDocente {
	nombre: string;
	email: string;
	password: string;
	asignaturas: Asignatura[];
}

export interface Asignatura {
	nombreAsignatura: string;
	seccion: string;
	horasSemanales: string;
	año: string;
	semestre: string;
}

//Json usuarios, estudiante

export interface IAlumno {
	nombre: string;
	rut: string;
	email: string;
	password: string;
	sede: string;
	jornada: string;
	
  }

  export interface IAlumnos {
	id: number;
	nombre: string;
	rut: string;
	email: string;
	password: string;
	sede: string;
	jornada: string;
	
  }
  
  // Codigos QR
  //get, put, delete
export interface ICodigoQrs{
    id:number;
	nombre:string;
    email: string;
    asignatura: string;
	fecha:string;

}

//post
export interface ICodigoQr{
	nombre:string;
    email: string;
    asignatura: string;
	fecha:string;

}

export interface IDocentes extends IDocente {
	id: number;
  }

  export interface IAsistencia{
	nombre:string;
	asignatura:string
  }

  export interface IAsistencias{
	id:number;
	nombre:string;
	asignatura:string
  }