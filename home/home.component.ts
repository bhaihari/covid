import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  myData:string ;
   temp:string 
  
   deaths:string
    cases:string
    recovered:string
    date=Date()
    
    newDeath:string
    newCases:string
    newRecovered:string
    i:number;
    j:number;
    k:number;
    


  constructor(private appservice:AppService) { }
  
  public pieChartLabels = [];
  public pieChartData = [];
  public pieChartType = '';


  ngOnInit() {
    this.getData()
    
  }

  getData(){
    this.appservice.data(this.cases,this.deaths,this.recovered).subscribe((res)=>{
    
      this.myData= (res["Global"])
      console.log(this.myData)
      this.cases= this.myData["TotalConfirmed"]
      this.deaths= this.myData["TotalDeaths"]
      this.recovered= this.myData["TotalRecovered"]
      
      console.log(this.date)
    
      this.newCases=this.myData["NewConfirmed"]
      this.newDeath=this.myData["NewDeaths"]
      this.newRecovered= this.myData["NewRecovered"]
    
     this.i= parseInt(this.cases);
     
     this.j= parseInt(this.recovered);
      
     this.k= parseInt(this.deaths);
     this.pieChartLabels=['Cases','Deaths','Recovered']
     this.pieChartData=[this.i,this.j,this.k]
     this.pieChartType='pie'
      
    });
    
 
    
  }
 

  

}
