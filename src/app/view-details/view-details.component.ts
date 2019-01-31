import { Component, OnInit } from '@angular/core';
import { JsonDataService} from '../json-data.service';
import { Router} from '@angular/router'
@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss'],
  providers : [JsonDataService]
})
export class ViewDetailsComponent implements OnInit {
  public apiData
  constructor(private _service:JsonDataService,private _router:Router) { }

  ngOnInit() {
    this._service.getProduct().subscribe(response=>{
      console.log(response);
      this.apiData=response;
    })
  }
  DeleteClick(item){
    this._router.navigate(['/Home/details',item.id,'Del'])
  }
  editClick(item){
    this._router.navigate(['/Home/details',item.id,'edit'])
  }
  addNew(){
    this._router.navigate(['/Home/details',0,'add'])
  }
}
