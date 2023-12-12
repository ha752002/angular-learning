import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSettingTabComponent } from './button-setting-tab.component';

describe('ButtonSettingTabComponent', () => {
  let component: ButtonSettingTabComponent;
  let fixture: ComponentFixture<ButtonSettingTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonSettingTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonSettingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
