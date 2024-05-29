import { Component, Input, OnInit } from '@angular/core';
import $, { event } from 'jquery';

@Component({
  selector: 'app-avatar-editor',
  standalone: true,
  imports: [],
  templateUrl: './avatar-editor.component.html',
  styleUrl: './avatar-editor.component.css'
})
export class AvatarEditorComponent implements OnInit {

  @Input() id:Number = -1;

  Prompt:String = "";

  ngOnInit(): void {

    // esconder todos las las características
    $("img[class~='part']").hide();
    $("div[class~='loading']").hide();
    $("div[class~='elecc-des']").hide();

    // inicializar eventos
    $("div[class~='elecc']").on("click",this.eleccionMenu);
    $("div[class~='gen-elecc-des']").on("click",this.eleccionGenero);

    
  }

  eleccionMenu(e:any) {
    $("div[class~='elecc']").removeClass("opcion-activa")
    $(e.target).addClass("opcion-activa")
    var corresponde = $(e.target).attr("corresponde");

    $("div[class~='elecc-des']").hide();
    $("div[class~='"+ corresponde + "']").slideDown();

    /* elegir por defecto */
  }

  eleccionGenero(e:any) {

    $("div[class~='gen-elecc-des']").removeClass("elecc-activa");
    $(e.target).closest("div[class~='gen-elecc-des']").addClass("elecc-activa");

    var imagen = $(e.target).closest("div[class~='gen-elecc-des']").attr("imagen")

    if(imagen) {
      $("div[class~='torso'] > img").hide();
      $("img[class~='" + imagen +"']").show();
    }
  }

}
