import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  formfield = new FormGroup({
    phone: new FormControl('', [
      Validators.minLength(10),
      Validators.pattern(/^\(?([6-9]{1})\)?([0-9]{9})$/)
    ]),
    pan: new FormControl('', [
      // Validators.required,
      // Validators.minLength(10),
      // Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}'),
    ]),
    name: new FormControl('', [
      // Validators.pattern('[a-zA-Z ]*')
    ]),
    email: new FormControl('', Validators.pattern(/^([^\s\@])+\@(([^\s\@\.])+\.)+([^\s\.]{2,})+$/)),
  });

  constructor() { }
  @Output() closeEvent = new EventEmitter<boolean>();

  ngOnInit(): void {
  }


  get phone(): any {
    return this.formfield.get('phone');
  }
  get pan(): any {
    return this.formfield.get('pan');
  }
  get name(): any {
    return this.formfield.get('name');
  }
  get email(): any {
    return this.formfield.get('email');
  }

  closePopup() {
    this.closeEvent.emit(false);
  }
  onSubmit() {
    console.log(
      this.phone.value,
      this.pan.value,
      this.name.value,
      this.email.value,
    )
    this.closePopup()
  }
}
