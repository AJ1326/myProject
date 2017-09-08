import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public openLog : boolean=false;

  constructor() { }

  ngOnInit() {
  }

  openLogin(){

    this.openLog = !this.openLog;
    console.log(this.openLog,"asasasasasas")

  }

}
