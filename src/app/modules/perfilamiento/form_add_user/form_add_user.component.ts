import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form_add_user',
  templateUrl: './form_add_user.component.html',
  styleUrls: ['./form_add_user.component.css']
})
export class Form_add_userComponent implements OnInit {

  public form!: FormGroup;

  constructor() {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      userName: new FormControl("", [Validators.required]),
    })
  }
  
  ngOnInit() {
  }

}
