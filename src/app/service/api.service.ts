import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  http = inject(HttpClient);
  baseURL: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor() { }

  getSampleData() {
    return this.http.get(this.baseURL);
  }
}
