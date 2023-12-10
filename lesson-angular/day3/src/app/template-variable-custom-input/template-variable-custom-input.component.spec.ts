import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVariableCustomInputComponent } from './template-variable-custom-input.component';

describe('TemplateVariableCustomInputComponent', () => {
  let component: TemplateVariableCustomInputComponent;
  let fixture: ComponentFixture<TemplateVariableCustomInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateVariableCustomInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateVariableCustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
