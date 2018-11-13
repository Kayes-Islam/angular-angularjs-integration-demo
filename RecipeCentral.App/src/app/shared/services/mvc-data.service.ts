import { Injectable } from '@angular/core';
import { MvcData } from '../models/mvc-data';
declare var mvcData:MvcData;

@Injectable({
  providedIn: 'root'
})
export class MvcDataService {
  constructor() { }

  public get baseHref(){
    return mvcData && mvcData.baseHref ? mvcData.baseHref : '/';
  }

  public get model(){
    return mvcData ? mvcData.model : null;
  }
}
