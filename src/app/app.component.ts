import {Component, enableProdMode, OnInit} from '@angular/core';
import {HttpBackend, HttpClient, HttpEventType, HttpHeaderResponse, HttpRequest, HttpResponse} from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import {MqApiServiceService} from './services/mq-api-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'mq-ui';
  constructor() {
  }
}
