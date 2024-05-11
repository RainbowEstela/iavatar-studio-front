import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWebComponent } from './layout-web.component';

describe('LayoutWebComponent', () => {
  let component: LayoutWebComponent;
  let fixture: ComponentFixture<LayoutWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
