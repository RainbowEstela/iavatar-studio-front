import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarEditorComponent } from './avatar-editor.component';

describe('AvatarEditorComponent', () => {
  let component: AvatarEditorComponent;
  let fixture: ComponentFixture<AvatarEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvatarEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
