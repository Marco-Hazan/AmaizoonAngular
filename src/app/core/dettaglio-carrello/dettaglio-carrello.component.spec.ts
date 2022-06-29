import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioCarrelloComponent } from './dettaglio-carrello.component';

describe('DettaglioCarrelloComponent', () => {
  let component: DettaglioCarrelloComponent;
  let fixture: ComponentFixture<DettaglioCarrelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioCarrelloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioCarrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
