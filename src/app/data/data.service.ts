import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
    return this.httpClient.post('https://putsreq.com/wlRob6y1OAjBKRSARuMA', userSettings);
    // return of(userSettings);
  }
}
