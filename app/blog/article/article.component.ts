import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
    selector:'blog-article',
    template:`
        <h2>My Article</h2>
        {{routeParams.get('year')}} <br />
        {{routeParams.get('month')}} <br />
        {{routeParams.get('day')}} <br />
        {{routeParams.get('title')}} <br />
        {{content}}
    `
})
export class ArticleComponent implements OnInit {
  content: string;
  
  constructor(public routeParams: RouteParams) {
    this.routeParams = routeParams;
    this.content ="this is where rendered output goes";
  }
  
  showContent: boolean;
  
  ngOnInit(){
      if(this.content){
          this.showContent = true;
      }
      else {
       
      }
  }
}