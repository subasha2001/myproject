import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public footerlinks:string[] = ['Home','Recipies','Location','Products','Best Seller','Buy Online','Prime','Customer Service'];
}
