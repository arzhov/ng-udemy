import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable()
export class ServerService {
  constructor(private http: HttpClient) {}
  storeServers(servers: any[]) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    // return this.http.post('https:/ng-test-c719d.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.put('https:/ng-test-c719d.firebaseio.com/data.json',
      servers,
      {headers: headers});
  }
  getServers() {
    return this.http.get<Server[]>('https:/ng-test-c719d.firebaseio.com/data.json');
      // .map(
      //   (response: Response) => {
      //     const data = response.json();
      //     for (const server of data) {
      //       server.name = 'FETCHED_' + server.name;
      //     }
      //     return data;
      //   }
      // )
      // .catch(
      //   (error: Response) => {
      //     return Observable.throw('Something went wrong');
      //   }
      // );
  }
  getAppName() {
    return this.http.get('https:/ng-test-c719d.firebaseio.com/appName.json');
      // .map(
      //   (response: Response) => {
      //     return response.json();
      //   }
      // );
  }
}

export interface Server {
  name: string;
  capacity: number;
  id: number;
}
