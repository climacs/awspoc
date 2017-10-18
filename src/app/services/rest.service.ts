import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { RestResponse } from '../model/RestResponse';
import { environment } from '../../environment/environment';

@Injectable()
export class RestService {
  private serviceUrl: String = environment.serviceURL;
  constructor(private http: Http) { }

  public callService(callParameters: number): Observable<RestResponse> {
    let finalURL = this.serviceUrl.indexOf('http') > -1 ? this.serviceUrl + ('' + callParameters) : this.serviceUrl;
    // todo use parameter in call
    let outputReponse = this.http
      .get(`${finalURL}`, {headers: this.getHeaders()})
      .map(mapRestResponse);

    return outputReponse;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapRestResponse(response: Response): RestResponse {
  let rr = <RestResponse> ({primeNumber: response.json().primeNumber});
  return rr;
}

