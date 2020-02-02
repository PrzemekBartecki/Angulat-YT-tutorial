import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service'
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews : Object;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    // when component is loading

    this._http.getBeer().subscribe(data => {
      this.brews = data
      console.log(this.brews);
    });
  }

}
