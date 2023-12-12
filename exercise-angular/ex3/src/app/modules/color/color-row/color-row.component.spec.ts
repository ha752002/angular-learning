import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorRowComponent } from './color-row.component';

describe('ColorRowComponent', () => {
  let component: ColorRowComponent;
  let fixture: ComponentFixture<ColorRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
