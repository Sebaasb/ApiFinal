import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaFeriados } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeriadosService {

  constructor(private http: HttpClient) { }

  getFeriados(){
    return this.http.get<RespuestaFeriados>('https://api.victorsanmartin.com/feriados/en.json')
  }
}
