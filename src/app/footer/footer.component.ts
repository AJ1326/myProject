import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public isfooterVisible = 'footer-bar-actions';
  public isfooterDisplay = 'none';
  constructor() { }

  ngOnInit() {
  }

  openFooter(){
    if(this.isfooterVisible=="footer-bar-actions"){

      this.isfooterVisible='footer-bar-actions opened';
      this.isfooterDisplay='block';

    }else{
      this.isfooterVisible='footer-bar-actions';
      this.isfooterDisplay='none'
    }
  }

}
