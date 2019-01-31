import { Component, OnInit } from '@angular/core';
// import {LoginServiceService} from '../login-service.service';
import {Router} from '@angular/router'
import {HttpClient} from '@angular/common/http'
import { AuthService } from "angularx-social-login";

import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
// import { truncate } from 'fs';
declare var window: any;
declare var FB: any;
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
  providers:[]
})
export class LoginpageComponent implements OnInit {

  public uName;
  public uPassword;
  public loginName;
  public validate:boolean=false;
  private user: SocialUser;
  constructor(private _router:Router,private http:HttpClient,private authService: AuthService) {
    // This function initializes the FB variable 
//     (function(d, s, id){
//       var js, fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) {return;}
//       js = d.createElement(s); js.id = id;
//       js.src = '//connect.facebook.net/en_US/sdk.js';
//       fjs.parentNode.insertBefore(js, fjs);
//   }(document, 'script', 'facebook-jssdk'));


//   window.fbAsyncInit = () => {
//       console.log("fbasyncinit")

//       FB.init({
//           appId            : '2239896149632540',
//           autoLogAppEvents : true,
//           xfbml            : true,
//           version          : 'v3.2'
//       });
//       FB.AppEvents.logPageView();
//       // This is where we do most of our code dealing with the FB variable like adding an observer to check when the user signs in

// // ** ADD CODE TO NEXT STEP HERE **
//   };
   }

  

  ngOnInit() {
//     if (window.FB) {
//       window.FB.XFBML.parse();
//   }
//   FB.Event.subscribe('auth.statusChange', (response => {

//     if (response.status === 'connected') {
//         // use the response variable to get any information about the user and to see the tokens about the users session
//     }

// }));
  }

//  0580e9e2a39a081fb0dc9fe254529bf1
googleLoginClick(){
  var b=this.authService.signOut(false);
  console.log(b);
  var a=  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

   console.log("Google ::",a);
  //  if(a.__zone_symbol__state ==true){
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log("user:::",this.user);
      if(this.user){
        sessionStorage.setItem("LoginUser", this.user.firstName);
        this._router.navigate(['/Home/View']);
      }
      
      // this.loggedIn = (user != null);
    });
  //  }
   
}
LoginClick(){
  var d=this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID).then(user =>{
    console.log(user);
  })
}
createNew(){
  // alert("clicked");
  this._router.navigate(['/Home/details',0,'add']);
}
facebookLoginClick(){
    
   var a= this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);

   console.log("Facebook",a);
   
   this.authService.authState.subscribe((user) => {
    this.user = user;
    console.log("user:::",this.user);
    // this.loggedIn = (user != null);
  });
  var b=this.authService.signOut(false); 
  console.log(b);
    // // sessionStorage.setItem("LoginUser", "Richards");
    // // this._router.navigate(['/Home']);
    // //   this.router.navigate(['./home']);
    //   FB.getLoginStatus((response) => {
    //     console.log(response);
    //     if (response.status === 'connected') {
    //         this._router.navigate(['./Home']);
    //     }
    //     else {
    //         FB.login((loginResponse)=>{
    //           console.log(loginResponse);
    //             this._router.navigate(['./Home']);
    //         });
    //     }
    // });  

  }
 
 
}
