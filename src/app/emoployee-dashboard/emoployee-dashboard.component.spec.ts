import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmoployeeDashboardComponent } from './emoployee-dashboard.component';

describe('EmoployeeDashboardComponent', () => {
  let component: EmoployeeDashboardComponent;
  let fixture: ComponentFixture<EmoployeeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmoployeeDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmoployeeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
