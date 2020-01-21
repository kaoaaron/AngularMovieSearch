import { Component, Input } from '@angular/core';

@Component({
    selector: 'movie',
    templateUrl: 'app.movie.html',
    styleUrls: ['app.component.css']
})
export class Movie {
    @Input()  title: string;
    @Input()  poster: string;
    @Input()  desc: string;
}
