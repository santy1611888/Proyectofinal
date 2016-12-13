/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComidaChinaDomicilioComponent } from './comida-china-domicilio.component';

describe('ComidaChinaDomicilioComponent', () => {
  let component: ComidaChinaDomicilioComponent;
  let fixture: ComponentFixture<ComidaChinaDomicilioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComidaChinaDomicilioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidaChinaDomicilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
