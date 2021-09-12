import {Component, enableProdMode, OnInit} from '@angular/core';
import {HttpBackend, HttpClient, HttpEventType, HttpResponse} from '@angular/common/http';
import {MqApiServiceService} from '../services/mq-api-service.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public employees = [];
  public displayedColumns = ['name', 'mail', 'age', 'division', 'utcOffset'];
  dataSourceStatements = new MatTableDataSource();

  constructor(public http: HttpClient,
              private mqApiServiceService:MqApiServiceService,
              private handler: HttpBackend) {
    this.http = new HttpClient(this.handler);
  }


  ngOnInit(): void {
    this.mqApiServiceService.getEmployee().subscribe(event => {
        if (event instanceof HttpResponse) {
          const response = event.body;
          let tempEmployees = Object.values(response);
          for (let i = 0;  i < tempEmployees.length; ++i) {
            this.employees.push(tempEmployees[i]);
          }
          this.dataSourceStatements.data = this.employees
        }},
      error => {
      })
  }


  uploadFile(event) {
    const uploadedFile = event.target.files.item(0);
    if (uploadedFile) {
      this.mqApiServiceService.upload(uploadedFile).subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
          } else if (event instanceof HttpResponse) {
            alert('File Successfully Uploaded');
            const response = event.body;
            let tempEmploees = Object.values(response);
            for (let i = 0;  i < tempEmploees.length; ++i) {
              this.employees.push(tempEmploees[i]);
            }
            this.dataSourceStatements.data = this.employees
          }
        },
        error => {
        }
      );
    }
  }


}
