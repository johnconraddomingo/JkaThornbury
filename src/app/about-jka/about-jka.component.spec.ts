import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutJkaComponent } from './about-jka.component';

describe('AboutJkaComponent', () => {
  let component: AboutJkaComponent;
  let fixture: ComponentFixture<AboutJkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutJkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutJkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
