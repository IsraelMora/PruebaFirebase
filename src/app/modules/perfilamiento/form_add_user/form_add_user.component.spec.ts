/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Form_add_userComponent } from './form_add_user.component';

describe('Form_add_userComponent', () => {
  let component: Form_add_userComponent;
  let fixture: ComponentFixture<Form_add_userComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form_add_userComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form_add_userComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
