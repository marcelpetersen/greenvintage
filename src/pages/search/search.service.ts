import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { SearchModel } from './search.model';
import { LogServiceProvider } from '../../providers/log-service/log-service';

/*
  Generated class for the SearchServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SearchServiceProvider {

  constructor(public http: Http,public log:LogServiceProvider) {
    this.log.info('Hello SearchServiceProvider Provider');
  }

  getData(): Promise<SearchModel> {
    return this.http.get('./assets/example_data/search.json')
      .toPromise()
      .then(response => response.json() as SearchModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    this.log.errorService('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
