import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_KEY  = '8301cdfb8ba46882995461b21628b641';
const BASE_URL  = 'http://api.themoviedb.org/3/discover/movie?api_key='
                + API_KEY

const GENRE_URL = 'https://api.themoviedb.org/3/genre/movie/list?api_key='
                + API_KEY
                + '&language=en-US';
   
const DAYS_BACK = 30;
const defaultGenre = "28" //change this for default page

const urlStrings = ['&primary_release_date.gte=', '&primary_release_date.lte=', '&page=', '&with_genres=']

@Component({
    selector: 'movieroute',
    templateUrl: 'movieroute.html',
    styleUrls: ['app.component.css']
})
export class MovieRoute {
    _movieArray: Array<any>;
    _genreArray: Array<any>;
    _http:HttpClient;
    selectedGenreId: string;
    startDate: string;
    today: string
    page: number = 1;
    numResults: number;
    itemsPerPage: 20;
    prevGenre:string;

    constructor(private http: HttpClient) {
        this._http = http;
    }

    ngOnInit() {
        this.getDateRange();
        this.getGenres();
        this.selectedGenreId = defaultGenre;
        this.getMovies();
    }

    getDateRange() {
        let todayDate = new Date();
        this.today = this.getFormattedDate(todayDate);
        //console.log(this.today)
        let start = new Date();
        start.setDate( start.getDate() - DAYS_BACK);
        this.startDate = this.getFormattedDate(start);
        //console.log(this.startDate)
    }

    getFormattedDate(dt:Date) {
       let day = ("0" + dt.getDate()).slice(-2); //pad with 0
       let month = ("0" + String((Number(dt.getMonth()) + 1))).slice(-2) //pad with 0 
       let year = dt.getFullYear()
       return year  + "-" + month + "-" + day
    }

    getMovies() {
        if(this.prevGenre != this.selectedGenreId){
            this.page = 1;
        }
        this.prevGenre = this.selectedGenreId;

        let MOVIE_URL = BASE_URL + urlStrings[0] + this.startDate + urlStrings[1] + this.today + urlStrings[2] + this.page + urlStrings[3] + this.selectedGenreId
        //console.log(MOVIE_URL)
        this._http.get<any>(MOVIE_URL)

          // Get data and wait for result.
          .subscribe(data => {
              this._movieArray  = data.results;
              this.numResults = data.total_results;
             // console.log(data)
          }, 
          error =>{
            // Let user know about the error.
            alert(error);
            console.error(error)
          })

    }

    getGenres() {
        this._http.get<any>(GENRE_URL)
        // Get data and wait for result.
        .subscribe(data => {
            this._genreArray = data.genres;
        }, 

        error =>{
          console.error(error)
        })
        
    }

    pageChanged(event){
      this.page = event
      this.getMovies()
    }
}

