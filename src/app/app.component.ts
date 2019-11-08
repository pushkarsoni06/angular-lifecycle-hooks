import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  activatedTab: string ='home';

  pushkarDetail = {
    firstName:'Pushkar',
    lastName:'Soni',
    email:'pushkarsoni06@gmail.com',
  };
  
  avinashDetail = {
    firstName:'Avniash',
    lastName:'Patwari',
    email:'a@gmail.com',
  };

  kamalDetail = {
    firstName:'Kamal',
    lastName:'Joshi',
    email:'k@gmail.com',
  };
  userDetail=this.pushkarDetail;

  
  userDetailAssign(name: string) {
    switch(name) {
      case 'pushkar':
        this.userDetail = this.pushkarDetail;
        break;
      case 'kamal':
          this.userDetail = this.kamalDetail;
          break;
      case 'avinash':
          this.userDetail = this.avinashDetail;
          break;
    }
  }

  changeTab(tabToSeleted: string) {
    this.activatedTab =tabToSeleted;
  }

}
