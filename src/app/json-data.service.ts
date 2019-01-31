import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {

  
  _productURL="http://localhost:3000/userDetails";
  constructor(private _http:HttpClient,) { }
  getProduct():Observable<any>{
    console.log(this._productURL)
    return this._http.get("http://localhost:3000/userDetails")
    .pipe(catchError(this.errorHandler));
    // .catch(this.errorHandler);
    // map((response:Response) => response.json()),
    
  }
  
  getDetails(id):Observable<any>{
    console.log("get Deatils Service call");
    console.log("http://localhost:3000/userDetails?id=",id)
    return this._http.get("http://localhost:3000/userDetails?id="+id)
      .pipe(catchError(this.errorHandler));
  }

  updateDeails(data,id):Observable<any>{
    console.log("update Details");
    console.log(data);
    return this._http.put(this._productURL+"/"+id,data)
    .pipe(catchError(this.errorHandler));
  }
  deleteDetails(data,id):Observable<any>{
    console.log("update Details");
    console.log(data);
    return this._http.delete(this._productURL+"/"+id,data)
    .pipe(catchError(this.errorHandler));
  }
  insertProduct(userName):Observable<any>{
    console.log(this._productURL+userName)
    return this._http.post(this._productURL,userName)
    .pipe(catchError(this.errorHandler));
    // .catch(this.errorHandler);
    // map((response:Response) => response.json()),
    
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message);
  }
}
