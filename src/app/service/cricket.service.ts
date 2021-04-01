import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from '../models/Match';

@Injectable({
  providedIn: 'root'
})


export class CricketService {

  API_KEY = "5uh6RFgBotYq2iJ5DVTSXDHjL633";

  _url = `https://cricapi.com/api/matches?apikey=${this.API_KEY}`;

  allMatch: Match;
  constructor(private http: HttpClient) { }

  getMatchesService(): Observable<Match>{
    return this.http.get<Match>(this._url);
                    
  }

  getMatchDetails(id): Observable<any>{
        
    return this.http.get(`https://cricapi.com/api/cricketScore?apikey=${this.API_KEY}&unique_id=${id}`);
  }


}
