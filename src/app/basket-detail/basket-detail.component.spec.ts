import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketDetailComponent } from './basket-detail.component';

describe('BasketDetailComponent', () => {
  let component: BasketDetailComponent;
  let fixture: ComponentFixture<BasketDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
