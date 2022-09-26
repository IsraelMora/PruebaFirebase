import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form_user',
  templateUrl: './form_user.component.html',
  styleUrls: ['./form_user.component.css']
})
export class Form_userComponent implements OnInit {

  public form!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      userName: new FormControl("", [Validators.required]),
    })
  }
  
  ngOnInit() {
    this.setUser();
  }

  setUser(){
    if (this.data.user){
      this.form.get('email')?.setValue(this.data.user.email);
      this.form.get('userName')?.setValue(this.data.user.userName);
    }
  }

}
