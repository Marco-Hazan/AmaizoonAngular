import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiepilogoCarrelloComponent } from './riepilogo-carrello.component';

describe('RiepilogoCarrelloComponent', () => {
  let component: RiepilogoCarrelloComponent;
  let fixture: ComponentFixture<RiepilogoCarrelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiepilogoCarrelloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiepilogoCarrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
