import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FirstService } from '../../Service/first.service';
import { CommonModule } from '@angular/common';
import { cardType } from '../../DataType/dataType';
import { vegiesData } from '../../Data/data';


@Component({
  selector: 'app-cartitems',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cartitems.component.html',
  styleUrl: './cartitems.component.css'
})
export class CartitemsComponent {

  constructor(private first: FirstService) {

    this.first.popUp$.subscribe((status: boolean) => {
      this.showPopUp = status;
    })

  }

  public cartItems: cardType[] = vegiesData;

  closePopUp() {
    this.showPopUp = false;
  }

  public showPopUp: boolean = false;

  @Output() sendEvent = new EventEmitter<string>();
  @Output() sendIncrement = new EventEmitter<string>();
  @Output() sendDecrement = new EventEmitter<string>();
  @Output() sendPopUp = new EventEmitter<boolean>();

  deleteItem(arg: string) {
    this.sendEvent.emit(arg);
  }
  increment(arg: string) {
    this.sendIncrement.emit(arg);
  }
  decrement(arg: string) {
    this.sendDecrement.emit(arg);
  }

  @Input() totalSum = 0;

}
