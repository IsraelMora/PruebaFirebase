import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal_confirmation',
  templateUrl: './modal_confirmation.component.html',
  styleUrls: ['./modal_confirmation.component.css']
})
export class Modal_confirmationComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  }

}
