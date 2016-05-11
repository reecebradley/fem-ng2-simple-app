import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams, Route} from 'angular2/router';
// import {  } from 'angular2/common';

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
  
  constructor(public routeParams: RouteParams, public router: Router, public route: Route) {
    this.routeParams = routeParams;
    this.content ="this is where rendered output goes";
  }
  
  showContent: boolean;
  
  ngOnInit(){
      var a = 'blog/' + this.routeParams.get('year') + '/' 
      + this.routeParams.get('month') + '/' 
      + this.routeParams.get('day') + '/'
      + this.routeParams.get('title');
      //this.content = require('');
      
    //   if(this.content){
    //       this.showContent = true;
    //   }
    //   else {
       
    //   }
  }
}