import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  constructor(private http: HttpClient) {}

  recordClick(userId: string): Observable<void> {
    return this.http.get<void>(`http://localhost:8080/click?userId=${userId}`);
  }

  getClickCount(userId: string): Observable<{ clicks: number }> {
    return this.http.get<{ clicks: number }>(`http://localhost:8081/clicks/count?userId=${userId}`);
  }

}
