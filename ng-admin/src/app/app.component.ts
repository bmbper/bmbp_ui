import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private router:Router) {

  }
  ngOnInit(): void {
    let userToken = window.localStorage.getItem("bmbpToken");
    if(userToken){
      this.goHome();
    }else{
      this.goLogin();
    }

  }

  goLogin():void{
    this.router.navigateByUrl("/login")
  }

  goHome():void{
    this.router.navigateByUrl("/home")
  }

}
