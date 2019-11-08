import { Component, OnInit, Input, HostListener, Inject } from '@angular/core';
import { UsersService } from '../users.service';
import { forEach } from '@angular/router/src/utils/collection';

/**Class Decorator */
/*
function isTestable(target){
  target.prototype.isTestable = true;
}
*/

function  isTestable(message: boolean){
  return function(target){
    target.prototype.isTestable = message;
  }
}

function Enumrable(value: boolean)  {
  return function ( target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      descriptor.enumerable = value;
  }
}

function ReadOnly(value)  {
  return function ( target: any,  propertyKey: string) {
    Object.defineProperty(target, propertyKey, {writable : value});
  }
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
@isTestable(true)
export class TestComponent implements OnInit {

  @Input()
  title: string;

  @ReadOnly(true)
  name: string = "pushkar";

  
  @ReadOnly(true)
  static lastName: string = "pushkar";

  @Enumrable(false)
  test3(){
    for(let key in this){
    }
  }

  @Enumrable(true)
  static test4(){
    for(let key in this){
    }
  }

  constructor() {
    this.test3();
    TestComponent.test4();
    this.name = "Anindya";
  
  }

  @HostListener('click',['$event'])
  test($event: Event) {
    alert("Hii clicked here");
  }

  ngOnInit() {
  }

}
