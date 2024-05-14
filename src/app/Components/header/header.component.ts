import { Component } from '@angular/core';
import { FirstService } from '../../Service/first.service';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { vegiesData } from '../../Data/data';
import { cardType } from '../../DataType/dataType';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatDividerModule, MatButtonModule, FooterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public headerCount:number = 0;

  constructor(private first:FirstService){
    this.first.count$.subscribe((status:number)=>{
      this.headerCount = status;
    })
  }

  public headerlinks:string[] = ['Products','Best Seller','Buy Online','Prime','Customer Service'];
  public headerProductslinks:string[] = ['Fruits','Vegetables','Chocolates','Bathroom Items','Kitchen'];

  public cartItems:cardType[] = vegiesData;  

  showCartItems(arg:boolean){
    let status = false;
    this.cartItems.forEach((val=>{
      if(val.addedToCart > 0){
        status = true;
        this.first.receivePopUp(status);
      }else{
        this.first.receivePopUp(status);
      }
    }))
     
  }
  
}
