import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Address = {
  number: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
};

export type Author = {
  id?: number;
  name: string;
  photo: string;
  pseudo: string[];
  address: Address | null;
};

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private http = inject(HttpClient);

  public getAuthorList(): Observable<Author[]> {
    return this.http.get<Author[]>(`/api/authors`);
  }

  public getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>(`/api/authors/${id}`);
  }

  public create(author: Author): Observable<void> {
    return this.http.post<void>('/api/authors', author);
  }
}
