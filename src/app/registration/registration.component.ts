import { Component, OnInit } from '@angular/core';
import {JsonDataService} from '../json-data.service'
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers:[JsonDataService]
})
export class RegistrationComponent implements OnInit {
  public name;userName;email;password;confirmPassword
  public action;
  public id;
  public readName: Boolean=false;
      public readUName: Boolean=false;
      public readEmail: Boolean=false;
      public readPassword: Boolean=false;
      public readCPassword: Boolean=false;
      public buttonText;title;buttonPasswordText;
      public condition=false;
  constructor(private _service:JsonDataService,private _router:Router,private activatedRoute:ActivatedRoute) { 
   this.action=this.activatedRoute.snapshot.params['action'];
   this.id=this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    debugger;
    if(this.action=="edit"){
      this.buttonPasswordText="Cahnge Password";
      this.title="Update";
      this.buttonText="Update Information";
      this._service.getDetails(this.id).subscribe(response=>{
        console.log(response);
        this.name=response[0].Name;
        this.userName=response[0].userName
        this.email=response[0].emailId
        // this.password=response[0].password
        this.readName=true;
        this.readUName=true;
        this.readEmail=false;
        this.readPassword=false;
        this.readCPassword=false;
      })
      

    }
    else if (this.action=="Del"){
      this.title="Delete";
      this.buttonText="Delete Information";
      console.log(this.id);
      this._service.getDetails(this.id).subscribe(response=>{
        console.log(response);
        console.log(response[0].Name);
        this.name=response[0].Name;
        this.userName=response[0].userName
        this.email=response[0].emailId
        this.password=response[0].password
        // this.confirmPassword=response.
        this.readName=true;
      this.readUName=true;
      this.readEmail=true;
      this.readPassword=true;
      this.readCPassword=true;
      })
      
    }
    else {
      this.title="Create"
      this.buttonText="Sign up"
      this.condition=true;
    }
  }
  changePasswordClick(){
    // this.buttonPasswordText="Cahnge Password"
    if(this.condition==true){
      this.condition=false;
    }
    else{
      this.condition=true;
    }
  }
  submitClick(){
    console.log(this.name);
    console.log(this.userName);
    console.log(this.email);
    console.log(this.password);
    console.log(this.confirmPassword)
    var body;
    if(this.action=='add'){
      if((this.password != null && this.password !='') && (this.confirmPassword != null && this.confirmPassword !='')){
        body={
      
          "Name": this.name,
          "userName":this.userName,
          "emailId": this.email,
          "password":this.password
        }
        this._service.insertProduct(body).subscribe(response=>{
          console.log(response)
          alert("Submitted");
          this._router.navigateByUrl('/login');
        })
      }
      else {
      alert("please Enter Password and Confirm Password Correct");
      }
      
      
    }
    else if(this.action =='edit'){
      debugger;
      if(this.condition==false){
        body={
          "Name": this.name,
          "userName":this.userName,
          "emailId": this.email
        }
        // body.
        this._service.updateDeails(body,this.id).subscribe(response=>{
          console.log(response)
          alert("Submitted");
          this._router.navigateByUrl('/Home/View');
        })
      }
      else{
        if((this.password != null && this.password !='') && (this.confirmPassword != null && this.confirmPassword !='')){
          body={
            "Name": this.name,
            "userName":this.userName,
            "emailId": this.email,
            "password":this.password
          }
          // body.
          this._service.updateDeails(body,this.id).subscribe(response=>{
            console.log(response)
            alert("Submitted");
            this._router.navigateByUrl('/Home/View');
          })
        }
        else {
          alert("Please Enter Password and Confirm Password");
        }
        
      }
      
    }
    else if(this.action =='Del'){
      body={
        "Name": this.name,
        "userName":this.userName,
        "emailId": this.email,
        "password":this.password
      }
      // body.
      this._service.deleteDetails(body,this.id).subscribe(response=>{
        console.log(response)
        alert("Deleted");
        this._router.navigateByUrl('/Home/View');
      })
    }
  }
  loginRedirect(){
    this._router.navigateByUrl('/login');
  }
}
