import { Component, OnInit } from '@angular/core';

import { NewsService } from '../shared/news.service';
import { News } from '../shared/news';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-newsall',
  templateUrl: './newsall.component.html',
  styleUrls: ['./newsall.component.css']
})
export class NewsallComponent implements OnInit {
  news: Observable<News[]>; //News[]  from share news
  isToggle: boolean = true;

  constructor(private newService: NewsService) { } //from NsewService class

  ngOnInit() {
    this.news = this.newService.getNews(); //return as observable
  }

  toggleImage():void {
    this.isToggle = !this.isToggle;

  }



}
