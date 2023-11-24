import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcdRiskComponent } from './ncd-risk.component';

describe('NcdRiskComponent', () => {
  let component: NcdRiskComponent;
  let fixture: ComponentFixture<NcdRiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcdRiskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NcdRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
