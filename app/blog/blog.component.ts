import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ArticleComponent} from './article/article.component';

@Component({
    selector:'blog',
    template:`
        <h1>My Blog</h1>
        <div>
        <router-outlet></router-outlet>
        </div>
    `,
    directives: [ ROUTER_DIRECTIVES ]
})
@RouteConfig([
    {path: '/',
        name: 'List', 
        component: ArticleComponent,  
        useAsDefault:true
    },
    {path: '/:year',
        name: 'ArticleYear', 
        component: ArticleComponent
    },
    {path: '/:year/:month',
        name: 'ArticleYearMonth', 
        component: ArticleComponent
    },
    {path: '/:year/:month/:day',
        name: 'ArticleYearMonthDay', 
        component: ArticleComponent
    },
    {path: '/:year/:month/:day/:title',
        name: 'Article', 
        component: ArticleComponent
    }
])
export class BlogComponent {
    constructor() {
        
    }
}

// class myViewResolver extends ViewResolver{
//     resolve(component: Type): ViewMetadata {        
//         var view =  super.resolve(component);
//         // TODO: Write logic here:-)
//         view.templateUrl = 'app/app.html';
//         return view;
//     }
// }
// bootstrap(App,[
//     provide(ViewResolver , {useClass:myViewResolver})
// ]);