import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DojoKunComponent } from './dojo-kun.component';

describe('DojoKunComponent', () => {
  let component: DojoKunComponent;
  let fixture: ComponentFixture<DojoKunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DojoKunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DojoKunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
