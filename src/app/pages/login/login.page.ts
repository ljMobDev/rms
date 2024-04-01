import { Component, OnInit } from '@angular/core';
import {HttpClientModule, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
password=''

loader:boolean = false;
  constructor(private http: HttpClient){
}

login(){
 this.http.get<any>(`https://webtechnologies.site/v2/agustin/api/login.php?username=`+this.username+`&password=`+this.password)
        .subscribe((data: any) => {
          console.log(data)
          this.loader = false
          if(data.message=="no record")
            alert(data.message)
          else{
            alert(data.message)
          }
        });
 
   }
 isToastOpen = false;

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
  ngOnInit() {
  }

}
