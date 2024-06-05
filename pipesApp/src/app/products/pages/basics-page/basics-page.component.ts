import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = "alvaro";
  public nameUpper: string = "ALVARO";
  public nameTitle: string = "aLVaRo";


  public customDate: Date = new Date();
}
