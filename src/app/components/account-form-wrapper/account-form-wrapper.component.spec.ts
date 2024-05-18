import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFormWrapperComponent } from './account-form-wrapper.component';

describe('AccountFormWrapperComponent', () => {
  let component: AccountFormWrapperComponent;
  let fixture: ComponentFixture<AccountFormWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountFormWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountFormWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
