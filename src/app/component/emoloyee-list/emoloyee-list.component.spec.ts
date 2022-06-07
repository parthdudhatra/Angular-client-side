import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoloyeeListComponent } from './emoloyee-list.component';

describe('EmoloyeeListComponent', () => {
  let component: EmoloyeeListComponent;
  let fixture: ComponentFixture<EmoloyeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmoloyeeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoloyeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
