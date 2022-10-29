import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  popupStatus = false
  
  constructor() {
   }

  ngOnInit(): void {
  }
  togglePopup(value: boolean) {
    this.popupStatus = value
  }
}
