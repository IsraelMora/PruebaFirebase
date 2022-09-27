/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Modal_confirmationComponent } from './modal_confirmation.component';

describe('Modal_confirmationComponent', () => {
  let component: Modal_confirmationComponent;
  let fixture: ComponentFixture<Modal_confirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modal_confirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modal_confirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
