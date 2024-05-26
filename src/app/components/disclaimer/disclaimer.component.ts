import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-disclaimer',
  standalone: true,
  imports: [],
  templateUrl: './disclaimer.component.html',
  styleUrl: './disclaimer.component.css'
})
export class DisclaimerComponent implements OnInit {
  ngOnInit(): void {
    $("div[class='disclaimer-cross']").on('click',function(event) {
      $(event.target).closest("div[class='disclaimer-container']").slideUp();
    })
  }
}
