import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevenMonthsComponent } from './eleven-months.component';

describe('ElevenMonthsComponent', () => {
  let component: ElevenMonthsComponent;
  let fixture: ComponentFixture<ElevenMonthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElevenMonthsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElevenMonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
