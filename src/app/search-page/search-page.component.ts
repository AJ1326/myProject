import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {SearchService} from '../services/service.search'


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  public providerList:any;
  public islocation1Visible = 'accordion-section';
  public islocationDisplay = 'none';
  public isspecialityVisible = 'accordion-section';
  public isspecialityDisplay = 'none';
  public isprocedureVisible = 'accordion-section';
  public isprocedureDisplay = 'none';
  public isbodypartVisible = 'accordion-section';
  public isbodypartDisplay = 'none';
  public isproviderVisible = 'accordion-section';
  public isproviderDisplay = 'none';
  // public paginationCount:number;
  // public arr=[]
  // public search=''

  constructor( private _router :Router, private getProviderList: SearchService) { }

  ngOnInit() {
    this.getProviderList.getProviderList().subscribe(result=>{
      this.providerList = result;
      // this.paginationCount= Math.ceil(this.musicList.count/6)
      // for(let i=0; i<2;i++){
      //   this.arr.push(i+1)
      //
      // }
    });
  }

  openLocation(){

    if(this.islocation1Visible=="accordion-section"){

      this.islocation1Visible='accordion-section accordion-expanded';
      this.islocationDisplay='block';
      this.isspecialityVisible = 'accordion-section';
      this.isspecialityDisplay = 'none';
      this.isprocedureVisible = 'accordion-section';
      this.isprocedureDisplay = 'none';
      this.isbodypartVisible = 'accordion-section';
      this.isbodypartDisplay = 'none';
      this.isproviderVisible = 'accordion-section';
      this.isproviderDisplay = 'none';

    }else{
      this.islocation1Visible='accordion-section';
      this.islocationDisplay='none'
    }
  }

  openProvider(){

    if(this.isproviderVisible=="accordion-section"){

      this.isproviderVisible='accordion-section accordion-expanded';
      this.isproviderDisplay='block';
      this.isspecialityVisible = 'accordion-section';
      this.isspecialityDisplay = 'none';
      this.isprocedureVisible = 'accordion-section';
      this.isprocedureDisplay = 'none';
      this.isbodypartVisible = 'accordion-section';
      this.isbodypartDisplay = 'none';
      this.islocation1Visible = 'accordion-section';
      this.islocationDisplay = 'none';

    }else{
      this.isproviderVisible='accordion-section';
      this.isproviderDisplay='none'
    }
  }

  openSpeciality(){

    if(this.isspecialityVisible=="accordion-section"){

      this.isspecialityVisible='accordion-section accordion-expanded';
      this.isspecialityDisplay='block';
      this.isproviderVisible = 'accordion-section';
      this.isproviderDisplay = 'none';
      this.isprocedureVisible = 'accordion-section';
      this.isprocedureDisplay = 'none';
      this.isbodypartVisible = 'accordion-section';
      this.isbodypartDisplay = 'none';
      this.islocation1Visible = 'accordion-section';
      this.islocationDisplay = 'none';

    }else{
      this.isspecialityVisible='accordion-section';
      this.isspecialityDisplay='none'
    }
  }

  openProcedure(){

    if(this.isprocedureVisible=="accordion-section"){

      this.isprocedureVisible='accordion-section accordion-expanded';
      this.isprocedureDisplay='block';
      this.isproviderVisible = 'accordion-section';
      this.isproviderDisplay = 'none';
      this.isspecialityVisible = 'accordion-section';
      this.isspecialityDisplay = 'none';
      this.isbodypartVisible = 'accordion-section';
      this.isbodypartDisplay = 'none';
      this.islocation1Visible = 'accordion-section';
      this.islocationDisplay = 'none';

    }else{
      this.isprocedureVisible='accordion-section';
      this.isprocedureDisplay='none'
    }
  }

  openBodyParts(){

    if(this.isbodypartVisible=="accordion-section"){

      this.isbodypartVisible='accordion-section accordion-expanded';
      this.isbodypartDisplay='block';
      this.isproviderVisible = 'accordion-section';
      this.isproviderDisplay = 'none';
      this.isspecialityVisible = 'accordion-section';
      this.isspecialityDisplay = 'none';
      this.isprocedureVisible = 'accordion-section';
      this.isprocedureDisplay = 'none';
      this.islocation1Visible = 'accordion-section';
      this.islocationDisplay = 'none';

    }else{
      this.isbodypartVisible='accordion-section';
      this.isbodypartDisplay='none'
    }
  }

  getValue(value){
    console.log(value);
  }

}
