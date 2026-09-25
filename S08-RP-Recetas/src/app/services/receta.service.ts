import {
  Injectable,
  inject
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable
} from 'rxjs';

import { Receta } from '../models/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  private http = inject(
    HttpClient
  );

  private apiUrl =
    'https://dummyjson.com/recipes';


  // GET

  obtenerRecetas(): Observable<any> {

    return this.http.get<any>(
      `${this.apiUrl}?limit=30`
    );
  }


  // GET POR ID

  obtenerReceta(
    id: number
  ): Observable<Receta> {

    return this.http.get<Receta>(
      `${this.apiUrl}/${id}`
    );
  }


  // POST

  crearReceta(
    receta: Receta
  ): Observable<Receta> {

    return this.http.post<Receta>(
      `${this.apiUrl}/add`,
      receta
    );
  }


  // PUT

  actualizarReceta(
    id: number,
    receta: Receta
  ): Observable<Receta> {

    return this.http.put<Receta>(
      `${this.apiUrl}/${id}`,
      receta
    );
  }


  // DELETE

  eliminarReceta(
    id: number
  ): Observable<Receta> {

    return this.http.delete<Receta>(
      `${this.apiUrl}/${id}`
    );
  }

}