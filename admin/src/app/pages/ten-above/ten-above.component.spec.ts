import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenAboveComponent } from './ten-above.component';

describe('TenAboveComponent', () => {
  let component: TenAboveComponent;
  let fixture: ComponentFixture<TenAboveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenAboveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenAboveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
