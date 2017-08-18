import { Component } from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';

//our root component class is decorated with Decorator or annotation
//Decorator add metha data about this class
@Component({
    selector: 'my-app',
    template: '<h1>First Angular 2 App</h1><courses></courses><authors></authors>',
    directives: [CoursesComponent, AuthorsComponent]
})
//our root component is a plain typeScript class
export class AppComponent { }
