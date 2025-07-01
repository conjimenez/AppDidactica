import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  // READ
  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // CREATE
  createPost(postData: any): Observable<any> {
    return this.http.post(this.apiUrl, JSON.stringify(postData), this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // DELETE
  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Error de cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error de servidor
      errorMessage = `Código: ${error.status}\nMensaje: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
