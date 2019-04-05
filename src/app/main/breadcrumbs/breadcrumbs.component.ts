import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-breadcrumbs',
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  public location: Location;
  public paths;

  constructor(location: Location) { this.location = location; }

  ngOnInit() {
    this.paths = (this.location.path()).match(/\w+/gi);
  }
}
