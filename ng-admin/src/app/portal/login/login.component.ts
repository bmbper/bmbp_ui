import {Component, OnInit} from '@angular/core';
import {FormLayout} from "ng-devui";
import {Router} from "@angular/router";
@Component({
    selector: 'bmbp-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class BmbpLoginComponent implements OnInit{
    constructor(private router:Router) {
    }
    layoutDirection: FormLayout = FormLayout.Horizontal;

    ngOnInit(): void {
    }


    onLogin():void {
        window.localStorage.setItem("bmbpToken","XXXXX");
        this.router.navigateByUrl("/home");
    }
}
