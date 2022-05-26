import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class ServicemitterService {

  constructor() { }

  invokeGetProductFunction = new EventEmitter;
  subVar:Subscription | undefined;

  addClick(){
    this.invokeGetProductFunction.emit()
  }

}
