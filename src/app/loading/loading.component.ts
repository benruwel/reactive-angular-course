import { LoadingService } from './loading.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {


  //we make the parameter service public to give the template access to it
  constructor(public loadingService : LoadingService) {
  }

  ngOnInit() {

  }


}
