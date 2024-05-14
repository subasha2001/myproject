import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor() { }

  private count = new Subject<number>();
  count$ = this.count.asObservable();

  private popUp = new Subject<boolean>();
  popUp$ = this.popUp.asObservable();

  receiveCount(status:number){
    this.count.next(status);
  }

  receivePopUp(status:boolean){
    this.popUp.next(status);
  }
  
}
