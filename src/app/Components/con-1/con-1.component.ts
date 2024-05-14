import { Component } from '@angular/core';
import { vegiesData } from '../../Data/data';
import { cardType } from '../../DataType/dataType';
import { CommonModule } from '@angular/common';
import { FirstService } from '../../Service/first.service';
import { CartitemsComponent } from '../cartitems/cartitems.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-con-1',
  standalone: true,
  imports: [CommonModule, CartitemsComponent, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './con-1.component.html',
  styleUrl: './con-1.component.css'
})
export class Con1Component {

  constructor(private first: FirstService) {

  }

  public card: cardType[] = vegiesData;

  receiveData(ATC: string) {
    
    let popupCheck = false;

    this.card.forEach((val) => {
      if (val.product == ATC) {
        val.addedToCart = 0;
        val.atc = 0;
      }
      if (val.addedToCart == 1) {
        popupCheck = true;
      }
    })

    if(popupCheck == false){
      this.first.receivePopUp(false);
    }

    this.sendCount();
    this.totalCount();

  }
  receiveIncrement(inc: string) {
    this.card.forEach((val => {
      if (val.product == inc) {
        val.atc = val.atc + 1;
      }
    }))
    this.totalCount();
  }
  receiveDecrement(dec: string) {

    let popupCheck = false;

    this.card.forEach((val => {
      if (val.product == dec && val.atc > 1) {
        val.atc = val.atc - 1;
      }
      else if (val.product == dec && val.atc == 1) {
        val.addedToCart = 0;
        val.atc = 0;
      }
      if (val.addedToCart == 1) {
        popupCheck = true;
      }

    }))

    if(popupCheck == false){
      this.first.receivePopUp(false);
    }

    this.sendCount();
    this.totalCount();
  }



  increment(arg: string) {
    this.card.forEach((val) => {
      if (val.product == arg) {
        val.oq = val.oq + 1;
      }
    })
  }
  decrement(arg: string) {
    this.card.forEach((val) => {
      if (val.product == arg && val.oq > 0) {
        val.oq = val.oq - 1;
      }
    })
  }
  addToCart(arg: string) {
    this.card.forEach((val) => {
      if (val.product == arg && val.oq > 0) {
        val.addedToCart = 1;
        val.atc = val.oq;
        val.oq = 0;
      }
    })
    this.sendCount();
    this.totalCount();
  }



  sendCount() {
    let count = 0;
    this.card.forEach((val) => {
      if (val.addedToCart == 1) {
        count++;
      }
    })
    this.first.receiveCount(count);
  }

  public sum: number = 0;

  totalCount() {
    let s = 0;
    this.card.forEach((val) => {
      s = s + (val.price * val.atc);
      this.sum = s;
    })
    s = 0;
  }
}
