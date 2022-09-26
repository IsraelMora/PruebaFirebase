/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Form_userComponent } from './form_user.component';

describe('Form_userComponent', () => {
  let component: Form_userComponent;
  let fixture: ComponentFixture<Form_userComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form_userComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form_userComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
