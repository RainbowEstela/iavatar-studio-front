import { Component } from '@angular/core';
import { LayoutWebComponent } from '../../layouts/layout-web/layout-web.component';
import { DisclaimerComponent } from '../../components/disclaimer/disclaimer.component';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [LayoutWebComponent,DisclaimerComponent],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {

}
