import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'admin';
  constructor(private el:ElementRef){}
  ngOnInit(): void {

    let alldrpdwn = document.querySelectorAll('.dropdown-container');
    console.log(alldrpdwn,'alldrpdwn#');
    alldrpdwn.forEach((item:any)=>{
      const a = item.parentElement?.querySelector('a:first-child');
      console.log(a,'a#');
      a.addEventListener('click',(e:any)=>{
          e.preventDefault();
          this.el.nativeElement.classList.toggle('active');
          item.classList.toggle('show');
      });
      
    });

  }

  
  // responsivemenu 
  responsiveMenu:any;
  // responsivemaincontent
  responsiveContent:any;
  defaultStatus=true;
  openNav(status:any)
  {
    if(status===this.defaultStatus)
    {
      this.responsiveMenu = {
        'display':'block'
      }
      this.responsiveContent={
        'margin-left':'150px'
      }
      this.defaultStatus = false;
    }else
    {
      this.responsiveMenu = {
        'display':null
      }
      this.responsiveContent={
        'margin-left':null
      }
      this.defaultStatus=true;
    }

  }

}