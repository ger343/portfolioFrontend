import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { persona } from '../model/persona.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class PersonaService {
   URL = 'https://backend-gerardo.onrender.com/personas/';//'http://localhost:8080/personas/' ;

  constructor(private http: HttpClient) { }

  public getPersona(): Observable <persona> {
    return this.http.get<persona>(this.URL+ 'detail/2');
  }

  public update(id: number, persona: persona): Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`,persona);
}
public lista(): Observable<persona[]>{
  return this.http.get<persona[]>(this.URL + 'lista');

}
public detail(id: number): Observable<persona>{
  return this.http.get<persona>(this.URL + `detail/${id}`);
}
public save(persona:persona): Observable<any>{
  return this.http.post<any>(this.URL + 'create', persona);
}

}