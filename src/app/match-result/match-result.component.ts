import { Component, OnInit } from '@angular/core';
import {HttpBackend, HttpClient, HttpResponse} from '@angular/common/http';
import {MqApiServiceService} from '../services/mq-api-service.service';

@Component({
  selector: 'app-match-result',
  templateUrl: './match-result.component.html',
  styleUrls: ['./match-result.component.scss']
})
export class MatchResultComponent {

  public combinations = [];
  public result: any;

  constructor(public http: HttpClient,
              private mqApiServiceService:MqApiServiceService,
              private handler: HttpBackend) {
    this.http = new HttpClient(this.handler);
  }

  ngOnInit(): void {
    this.mqApiServiceService.getMatches().subscribe(event => {
        if (event instanceof HttpResponse) {
          const response = event.body;
          let matchResult = Object.values(response.combinationList);
          for (let i = 0;  i < matchResult.length; ++i) {
            this.combinations.push(matchResult[i])
          }
          this.result =  response.result;

        }},
      error => {
      })
  }

}
