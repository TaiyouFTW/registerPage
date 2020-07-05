import { Component, OnInit } from '@angular/core';
import { Status } from './shared/status';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  status: Status;

  constructor() {}

  ngOnInit(): void {
    this.status = {} as Status;
    this.status.code = 404;
    this.status.text = 'Page Not Found';
  }
}
