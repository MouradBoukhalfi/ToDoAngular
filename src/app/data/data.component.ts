import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  
  Data= [];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('restapi/webresources/myresource').
      toPromise().then(r => r.json()).then(r=>this.Data = r);
  }

}
