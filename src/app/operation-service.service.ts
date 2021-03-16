import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Operation } from './operation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private operationUrl: string;
  private operationEndpoint: string;
  constructor(private http: HttpClient) {
    this.operationUrl = 'https://operationapp-api.herokuapp.com/api/operations';
    this.operationEndpoint = '';
  }

  public setOperationEndpoint(endpoint: string){
    this.operationEndpoint = endpoint;
  }
  public findAll(): Observable<Operation[]> {
    return this.http.get<Operation[]>(this.operationUrl);
  }

  public save(operation: Operation) {
    return this.http.post<Operation>(this.operationUrl + '/' + this.operationEndpoint, operation);
  }
}
