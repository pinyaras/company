import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { News } from './news';

import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx'; // import all RX servies
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';




@Injectable()
export class NewsService {
  apiKey: string = '7a70a4cf22fd459a8ca5cb39c5781394';
  source: string = 'the-next-web';
  sortBy: string = 'latest';
  apiUrl: string = `https://newsapi.org/v1/articles?source=${this.source}&sortBy=${this.sortBy}&apiKey=${this.apiKey}`;

  constructor(private http: Http) {}
  /*getNews() {
    return this.http.get(this.apiUrl).map((res: Response) => res.json().articles)
    .catch((error: any) => Observable.throw(error.json().message || 'Server error'));
  }*/

  getNews(): Observable<News[]> {
    return this.http.get(this.apiUrl)
    .map((res: Response) => <News[]> res.json().articles)
    .catch(this.handleError);
  }

  private handleError(error: any) {
    return Observable.throw(error.json().message || 'Server error');
  }
}
