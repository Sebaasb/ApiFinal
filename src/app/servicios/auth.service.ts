import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IDocentes, IDocente, IAlumnos } from '../pages/interfaces/interfaces';
import { Observable } from 'rxjs';
import { IAlumno } from '../pages/interfaces/interfaces';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private loggedInEmail: string | null = null;
  private loggedInDocente: IDocente | null = null; 
  

  constructor(private httpClient: HttpClient) { }


  GetAllUsers(): Observable<IDocentes> {
    return this.httpClient.get<IDocentes>(`${environment.apiURL}/docentes`);
  }
  

  //login alumno

   GetAlumnoByEmail(email: string): Observable<IAlumno> {
     return this.httpClient.get<IAlumno>(`${environment.apiURL}/alumno/?email=${email}`);
   }
  
   //login docente
    GetUserById(email:any): Observable<IDocente>{
     return this.httpClient.get<IDocente>(`${environment.apiURL}/docentes/?email=${email}`);
   }
  
  IsLoggedIn() {
    return sessionStorage.getItem('email')!=null;
  }

  GetUserrole(): string {
    return sessionStorage.getItem('userrole') || ''; 
  }

  IsExiste(){
    if (this.IsLoggedIn()){
      return true
    }
    else{
      return false
    }
  }


  SetLoggedInEmail(email: string): void {
    this.loggedInEmail = email;
  }

  // Obtener el nombre de usuario del usuario autenticado
  GetLoggedInEmail(): string | null {
    return sessionStorage.getItem('email');
  }

  //Buscar usuario por ID
  BuscarUsuarioId(id:number):Observable<IDocentes>{
    return this.httpClient.get<IDocentes>(`${environment.apiURL}/docentes/?id=${id}`);
  }

  ActualizarUsuario(docente:any):Observable<IDocentes>{
    return this.httpClient.put<IDocentes>(`${environment.apiURL}/docentes/${docente.id}`, docente);
  }

  BuscarAlumnoId(id:number):Observable<IAlumnos>{
    return this.httpClient.get<IAlumnos>(`${environment.apiURL}/alumno/?id=${id}`);
  }

  ActualizarAlumno(alumno:any):Observable<IAlumnos>{
    return this.httpClient.put<IAlumnos>(`${environment.apiURL}/alumno/${alumno.id}`, alumno);
  }


}
