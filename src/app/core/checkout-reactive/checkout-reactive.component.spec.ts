import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutReactiveComponent } from './checkout-reactive.component';

describe('CheckoutReactiveComponent', () => {
  let component: CheckoutReactiveComponent;
  let fixture: ComponentFixture<CheckoutReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
