import { Component } from '@angular/core';
import { RestService } from './services/rest.service';

export class InputParam {
  value: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  name = 'AWS POC';
  inputParam: InputParam = { value: 1 };
  outputDisplay = '';

  constructor(private restService: RestService) {}

  public callService() {
    this.restService.callService(this.inputParam.value).subscribe(
      p => this.outputDisplay = '' + p.primeNumber);
  }
}
