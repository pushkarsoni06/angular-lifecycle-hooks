import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  /**String Interpolation */
  firstName:string ="Kamal";
  lastName:string ="Joshi";
  a: number = 4;
  b: number = 10;
 
  /** Property Binding*/
  disableButton: boolean = false;
  
  
  /** Event Binding*/
  changeName(){
    this.firstName = "Avinash";
    this.lastName = "Patwari";
  }
  

  /**Two Way Data Bindding */
  address: string = "Pune";

  toVerfiy(){
    
  }

  constructor() { }

  ngOnInit() {
  }
}
