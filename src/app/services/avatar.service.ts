import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class AvatarService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.avatarizeUrl}/Avatar`;
  }

  public getAvatar = (input: string): Observable<string> => {
    let headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );

    return this.http.get<string>(`${this.url}?input=${input}`, {
      headers,
      responseType: 'text' as 'json',
    });
  };
}
