import { Component, Input, OnChanges, SimpleChanges, OnInit, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, 
            AfterContentChecked, AfterViewInit, AfterViewChecked{
  @Input() userDetail:any;
  
  ngOnChanges(changes:SimpleChanges) {
    console.log('we are inside ngOnChanges');
    console.log(changes);
  }

  ngOnInit() {
    console.log('we are inside ngOnInit');
    console.log(this.userDetail);
  }

  ngDoCheck() {
    console.log('we are inside ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('we are inside ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('we are inside ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('we are inside ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('we are inside ngAfterViewChecked');
  }
 
}
