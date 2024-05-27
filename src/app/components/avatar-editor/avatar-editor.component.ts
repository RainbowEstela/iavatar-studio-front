import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-avatar-editor',
  standalone: true,
  imports: [],
  templateUrl: './avatar-editor.component.html',
  styleUrl: './avatar-editor.component.css'
})
export class AvatarEditorComponent implements OnInit {
  ngOnInit(): void {
    $("img[class~='part']").hide();
  }
}
