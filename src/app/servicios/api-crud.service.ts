import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Asignatura, IAsistencia,IAsistencias, IAlumnos, IDocente, IDocentes } from '../pages/interfaces/interfaces';
import { IAlumno, ICodigoQrs, ICodigoQr } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  constructor(private httpclient:HttpClient) { }

  CrearDocente(newDocente: IDocente): Observable<IDocente>{
    return this.httpclient.post<IDocentes>(`${environment.apiURL}/docentes`, newDocente);
  }

  CrearEstudiante(newEstudiante: IAlumno): Observable<IAlumno>{
    return this.httpclient.post<IAlumnos>(`${environment.apiURL}/alumno`, newEstudiante);
  }

  CrearAsignatura(newAsignatura: Asignatura): Observable<Asignatura>{
    return this.httpclient.post<Asignatura>(`${environment.apiURL}/palabras`, newAsignatura);
  }

  CrearQR(newCodigo:ICodigoQr): Observable<ICodigoQr>{
    return this.httpclient.post<ICodigoQrs>(`${environment.apiURL}/CodigosQr`, newCodigo);
  }

  listarCodigosQR(): Observable<ICodigoQrs[]> {
    return this.httpclient.get<ICodigoQrs[]>(`${environment.apiURL}/CodigosQr`);
  }

  CrearAsistencia(newAsistencia:IAsistencia): Observable<IAsistencia>{
    return this.httpclient.post<IAsistencias>(`${environment.apiURL}/Asistencia`, newAsistencia);
  }


}
