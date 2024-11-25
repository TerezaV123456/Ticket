import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeTicketComponent } from './see-ticket.component';

describe('SeeTicketComponent', () => {
  let component: SeeTicketComponent;
  let fixture: ComponentFixture<SeeTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeTicketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
