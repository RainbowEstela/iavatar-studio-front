import { Component } from '@angular/core';
import { LayoutWebComponent } from '../../layouts/layout-web/layout-web.component';
import { DisclaimerComponent } from '../../components/disclaimer/disclaimer.component';
import { AvatarEditorComponent } from '../../components/avatar-editor/avatar-editor.component';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [LayoutWebComponent,DisclaimerComponent,AvatarEditorComponent],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {

}
