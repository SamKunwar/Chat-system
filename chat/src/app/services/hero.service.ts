import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero, Channel, NormalUser } from '../classes';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api
  private channelsUrl = 'api/channels';  // URL to web api
  private normalUsersUrl = 'api/normalUsers';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET heroes from the server */
  getgroup (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getChannels (): Observable<Channel[]> {
    return this.http.get<Channel[]>(this.channelsUrl)
  }

  getUsers (): Observable<Channel[]> {
    return this.http.get<NormalUser[]>(this.normalUsersUrl)
  }


  /** POST: add a new hero to the server */
  addgroup (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions);
  }

  addChannel (hero: Channel): Observable<Channel> {
    return this.http.post<Hero>(this.channelsUrl, hero, httpOptions);
  }

  addUser (hero: NormalUser): Observable<NormalUser> {
    return this.http.post<NormalUser>(this.normalUsersUrl, hero, httpOptions);
  }

  /** DELETE: delete the hero from the server */
  deletegroup (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions);
  }

  deleteChannel (hero: Channel | number): Observable<Channel> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.channelsUrl}/${id}`;

    return this.http.delete<Channel>(url, httpOptions);
  }

  deleteNormalUser (hero: NormalUser | number): Observable<NormalUser> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.normalUsersUrl}/${id}`;

    return this.http.delete<NormalUser>(url, httpOptions);
  }
}