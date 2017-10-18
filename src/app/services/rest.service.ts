import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { RestResponse } from '../model/RestResponse';

@Injectable()
export class RestService {
  private serviceUrl: String = 'http://localhost:8080/compute/'; // '../data/sample.json';
  constructor(private http: Http) { }

  public callService(callParameters: number): Observable<RestResponse> {
    // todo use parameter in call
    let outputReponse = this.http
      .get(`${this.serviceUrl}` + callParameters, {headers: this.getHeaders()})
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

