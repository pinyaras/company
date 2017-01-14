import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';
import { News } from '../shared/news';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: Array<News>;
  errorMessage: string;
  isLoading: boolean = false;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNewsC();
      }

  getNewsC() { // component
    this.isLoading = true;
    this.newsService.getNews()
    .subscribe(news => {
      this.news = news;
      this.isLoading = false;
    }, error => {
      this.errorMessage = <any>error;
      this.isLoading = false;
    });
  }

    onSearch(search: string) {
    //console.log(search);
    if (search != '') {
      this.news = this.news.filter(item => item.title.toLowerCase().includes(search));
    } else {
      this.getNewsC();
    }

  }

}
