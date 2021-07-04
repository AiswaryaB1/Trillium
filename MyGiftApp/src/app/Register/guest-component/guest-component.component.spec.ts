import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestComponentComponent } from './guest-component.component';

describe('GuestComponentComponent', () => {
  let component: GuestComponentComponent;
  let fixture: ComponentFixture<GuestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
