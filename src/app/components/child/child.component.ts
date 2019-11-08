import { Component, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, AfterViewInit{
  @Input() lastName:string;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log("child - ngOnChanges");
  }

  ngAfterViewInit() {
    console.log('child - we are inside ngAfterViewInit');
  }
}
