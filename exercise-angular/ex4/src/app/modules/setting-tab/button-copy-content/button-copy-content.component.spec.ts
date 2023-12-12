import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCopyContentComponent } from './button-copy-content.component';

describe('ButtonCopyContentComponent', () => {
  let component: ButtonCopyContentComponent;
  let fixture: ComponentFixture<ButtonCopyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonCopyContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonCopyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
