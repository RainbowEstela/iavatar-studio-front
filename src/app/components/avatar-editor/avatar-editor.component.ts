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

  favorito:boolean = false;

  ngOnInit(): void {

    // esconder todos las las caracteristicas
    $("img[class~='part']").hide();
    $("div[class~='loading']").hide();
    $("div[class~='elecc-des']").hide();

    // inicializar eventos
    $("div[class~='elecc']").on("click",this.eleccionMenu);
    $("div[class~='gen-elecc-des']").on("click",this.eleccionGenero);
    $("div[class~='car-elecc-des']").on("click",this.eleccionCara);
    $("div[class~='pel-elecc-des']").on("click",this.eleccionPeinado);
    $("div[class~='ojo-elecc-des']").on("click",this.eleccionOjos);
    $("div[class~='nar-elecc-des']").on("click",this.eleccionNariz);
    $("div[class~='boc-elecc-des']").on("click",this.eleccionBoca);
    $("div[class~='ojo-color-elecc']").on("click",this.eleccionColorOjos);
    $("div[class~='pel-color-elecc']").on("click",this.eleccionColorPelo);

    // inicializar caracteristicas
    
  }

  eleccionMenu(e:any) {
    $("div[class~='elecc']").removeClass("opcion-activa")
    $(e.target).addClass("opcion-activa")
    var corresponde = $(e.target).attr("corresponde");

    $("div[class~='elecc-des']").hide();
    $("div[class~='"+ corresponde + "']").slideDown();

  }


  // cambia la eleccion de genero (menu)
  eleccionGenero(e:any) {

    $("div[class~='gen-elecc-des']").removeClass("elecc-activa");
    $(e.target).closest("div[class~='gen-elecc-des']").addClass("elecc-activa");

    var imagen = $(e.target).closest("div[class~='gen-elecc-des']").attr("imagen")

    if(imagen) {
      $("div[class~='torso'] > img").hide();
      $("img[class~='" + imagen +"']").show();
    }
  }

  // cambia la eleccion de cara (menu)
  eleccionCara(e:any) {
    $("div[class~='car-elecc-des']").removeClass("elecc-activa");
    $(e.target).closest("div[class~='car-elecc-des']").addClass("elecc-activa");

    var imagen = $(e.target).closest("div[class~='car-elecc-des']").attr("imagen")

    if(imagen) {
      $("div[class~='cabeza'] > img").hide();
      $("img[class~='" + imagen +"']").show();
    }
  }

  // cambia la eleccion del peinado (menu)
  eleccionPeinado(e:any) {
    $("div[class~='pel-elecc-des']").removeClass("elecc-activa");
    $(e.target).closest("div[class~='pel-elecc-des']").addClass("elecc-activa");

    var imagen = $(e.target).closest("div[class~='pel-elecc-des']").attr("imagen");
    var imagenBack = $(e.target).closest("div[class~='pel-elecc-des']").attr("imagen-back");
  

    if(imagen) {
      $("div[class~='peinados'] > img").hide();
      $("img[class~='" + imagen +"']").show();

      $("div[class~='fondo'] > img").hide();
      if(imagenBack) {
        $("img[class~='" + imagenBack +"']").show();
      }
    }
  }

  // cambia la eleccion de los ojos (menu)
  eleccionOjos(e:any) {
    $("div[class~='ojo-elecc-des']").removeClass("elecc-activa");
    $(e.target).closest("div[class~='ojo-elecc-des']").addClass("elecc-activa");

    var imagen = $(e.target).closest("div[class~='ojo-elecc-des']").attr("imagen")

    if(imagen) {
      $("div[class~='ojos'] > img").hide();
      $("img[class~='" + imagen +"']").show();
    }
  }

  // cambia la eleccion de la nariz (menu)
  eleccionNariz(e:any) {
    $("div[class~='nar-elecc-des']").removeClass("elecc-activa");
    $(e.target).closest("div[class~='nar-elecc-des']").addClass("elecc-activa");

    var imagen = $(e.target).closest("div[class~='nar-elecc-des']").attr("imagen")

    if(imagen) {
      $("div[class~='narices'] > img").hide();
      $("img[class~='" + imagen +"']").show();
    }
  }

  // cambia la eleccion de la boca (menu)
  eleccionBoca(e:any) {
    $("div[class~='boc-elecc-des']").removeClass("elecc-activa");
    $(e.target).closest("div[class~='boc-elecc-des']").addClass("elecc-activa");

    var imagen = $(e.target).closest("div[class~='boc-elecc-des']").attr("imagen")

    if(imagen) {
      $("div[class~='bocas'] > img").hide();
      $("img[class~='" + imagen +"']").show();
    }
  }

  // cambia la eleccion del color de los ojos (menu)
  eleccionColorOjos(e:any) {
    $("div[class~='ojo-color-elecc']").removeClass("elecc-activa");
    $(e.target).closest("div[class~='ojo-color-elecc']").addClass("elecc-activa");

    var color = $(e.target).closest("div[class~='ojo-color-elecc']").attr("color")
    

   
    if(color) {
      
      $("img[class~='iris']").removeClass("negro");
      $("img[class~='iris']").removeClass("marron");
      $("img[class~='iris']").removeClass("rojo");
      $("img[class~='iris']").removeClass("amarillo");
      $("img[class~='iris']").removeClass("verde");
      $("img[class~='iris']").removeClass("azul");
      
      $("img[class~='iris']").addClass(color);
    }
  }


  // cambia la eleccion del color del pelo
  eleccionColorPelo(e:any) {
    $("div[class~='pel-color-elecc']").removeClass("elecc-activa");
    $(e.target).closest("div[class~='pel-color-elecc']").addClass("elecc-activa");

    var color = $(e.target).closest("div[class~='pel-color-elecc']").attr("color")
    

   
    if(color) {
      
      $("div[class~='fondo'] > img").removeClass("negro");
      $("div[class~='fondo'] > img").removeClass("marron");
      $("div[class~='fondo'] > img").removeClass("rojo");
      $("div[class~='fondo'] > img").removeClass("amarillo");
      $("div[class~='fondo'] > img").removeClass("verde");
      $("div[class~='fondo'] > img").removeClass("azul");

      $("div[class~='peinados'] > img").removeClass("negro");
      $("div[class~='peinados'] > img").removeClass("marron");
      $("div[class~='peinados'] > img").removeClass("rojo");
      $("div[class~='peinados'] > img").removeClass("amarillo");
      $("div[class~='peinados'] > img").removeClass("verde");
      $("div[class~='peinados'] > img").removeClass("azul");

      $("img[class~='cejas']").removeClass("negro");
      $("img[class~='cejas']").removeClass("marron");
      $("img[class~='cejas']").removeClass("rojo");
      $("img[class~='cejas']").removeClass("amarillo");
      $("img[class~='cejas']").removeClass("verde");
      $("img[class~='cejas']").removeClass("azul");
      
      $("div[class~='fondo'] > img").addClass(color);
      $("div[class~='peinados'] > img").addClass(color);
      $("img[class~='cejas']").addClass(color);

    }
  }


}
