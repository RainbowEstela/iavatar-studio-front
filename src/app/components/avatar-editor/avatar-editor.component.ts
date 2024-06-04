import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import $, { event } from 'jquery';
import { BackIavatarService } from '../../core/services/back-iavatar.service';

@Component({
  selector: 'app-avatar-editor',
  standalone: true,
  imports: [],
  templateUrl: './avatar-editor.component.html',
  styleUrl: './avatar-editor.component.css'
})
export class AvatarEditorComponent implements OnInit {

  id:Number = -1;

  prompt:String = "";

  imagenActual:any = null;
  
  promptArray:Array<String> = [];

  favorito:Boolean = false;

  constructor(private routeParams: ActivatedRoute, private service: BackIavatarService, private router: Router) {

  }

  ngOnInit(): void {

    // esconder todos las las caracteristicas
    $("img[class~='part']").hide();
    $("div[class~='loading']").hide();
    $("div[class~='elecc-des']").hide();
    $("div[class~='avatar-ia']").hide();
    $("button[class~='btn-ver-disabled']").hide();

    // inicializar eventos
    $("div[class~='elecc']").on("click",this.eleccionMenu.bind(this));
    $("div[class~='gen-elecc-des']").on("click",this.eleccionGenero.bind(this));
    $("div[class~='car-elecc-des']").on("click",this.eleccionCara.bind(this));
    $("div[class~='pel-elecc-des']").on("click",this.eleccionPeinado.bind(this));
    $("div[class~='ojo-elecc-des']").on("click",this.eleccionOjos.bind(this));
    $("div[class~='nar-elecc-des']").on("click",this.eleccionNariz.bind(this));
    $("div[class~='boc-elecc-des']").on("click",this.eleccionBoca.bind(this));
    $("div[class~='ojo-color-elecc']").on("click",this.eleccionColorOjos.bind(this));
    $("div[class~='pel-color-elecc']").on("click",this.eleccionColorPelo.bind(this));


    // comprobar si piden mostar un avatar

    $("div[class~='loading']").show();

    this.routeParams.params.subscribe(params => {
      this.id = +params['id']; // el mas convierte el parametro en numero

      if(this.id) {
        this.service.findByid(this.id).subscribe({
          next: (data) => 
          {
            this.updatearAvatar(data.imagenNombre,data.favorito,data.prompt as string ,data.id , false)
          },
          error: (error) =>
          {
            console.log("hubo un error");
          }
        })
      } else {// inicializar caracteristicas

        // genero
        $("div[class~='gen-elecc-des']").removeClass("elecc-activa");

        let generoDiv = $("div[class~='gen-elecc-des']").first()
        generoDiv.addClass("elecc-activa");
        let generoImagen = generoDiv.attr("imagen");
        let generoPrompt = generoDiv.attr("texto");

        if(generoPrompt) {
          this.hacerPrompt(generoPrompt, 0);
        }

        if(generoImagen) {
          $("div[class~='torso'] > img").hide();
          $("img[class~='" + generoImagen +"']").show();
        }

        // cara
        $("div[class~='car-elecc-des']").removeClass("elecc-activa");
        let caraDiv = $("div[class~='car-elecc-des']").first();
        caraDiv.addClass("elecc-activa");
        let caraImagen = caraDiv.attr("imagen");
        let caraPrompt = caraDiv.attr("texto");

        if(caraPrompt) {
          this.hacerPrompt(caraPrompt, 6);
        }

        if(caraImagen) {
          $("div[class~='cabeza'] > img").hide();
          $("img[class~='" + caraImagen +"']").show();
        }

        // pelo
        $("div[class~='pel-elecc-des']").removeClass("elecc-activa");
        let peinadoDiv = $("div[class~='pel-elecc-des']").first();
        peinadoDiv.addClass("elecc-activa");
        let peinadoImagen = peinadoDiv.attr("imagen");
        let peinadoBack = peinadoDiv.attr("imagen-back")
        let peinadoPrompt = peinadoDiv.attr("texto");

        if(peinadoPrompt) {
          this.hacerPrompt(peinadoPrompt, 4);
        }

        if(peinadoImagen) {
          $("div[class~='peinados'] > img").hide();
          $("img[class~='" + peinadoImagen +"']").show();

          $("div[class~='fondo'] > img").hide();
          if(peinadoBack) {
            $("img[class~='" + peinadoBack +"']").show();
          }
        }

        // ojos
        $("div[class~='ojo-elecc-des']").removeClass("elecc-activa");
        let ojosDiv = $("div[class~='ojo-elecc-des']").first();
        ojosDiv.addClass("elecc-activa");
        let ojosImagen = ojosDiv.attr("imagen");
        let ojosPrompt = ojosDiv.attr("texto");

        if(ojosPrompt) {
          this.hacerPrompt(ojosPrompt, 1);
        }

        if(ojosImagen) {
          $("div[class~='ojos'] > img").hide();
          $("img[class~='" + ojosImagen +"']").show();
        }

        // nariz
        $("div[class~='nar-elecc-des']").removeClass("elecc-activa");
        let narizDiv = $("div[class~='nar-elecc-des']").first();
        narizDiv.addClass("elecc-activa");
        let narizImagen = narizDiv.attr("imagen");
        let narizPrompt = narizDiv.attr("texto");

        if(narizPrompt) {
          this.hacerPrompt(narizPrompt, 7);
        }

        if(narizImagen) {
          $("div[class~='narices'] > img").hide();
          $("img[class~='" + narizImagen +"']").show();
        }

        // boca
        $("div[class~='boc-elecc-des']").removeClass("elecc-activa");
        let bocaDiv = $("div[class~='boc-elecc-des']").first();
        bocaDiv.addClass("elecc-activa");
        let bocaImagen = bocaDiv.attr("imagen");
        let bocaPrompt = bocaDiv.attr("texto");

        if(bocaPrompt) {
          this.hacerPrompt(bocaPrompt, 5);
        }

        if(bocaImagen) {
          $("div[class~='bocas'] > img").hide();
          $("img[class~='" + bocaImagen +"']").show();
        }

        // color pelo
        $("div[class~='pel-color-elecc']").removeClass("elecc-activa");
        let colorPeloDiv = $("div[class~='pel-color-elecc']").first();
        colorPeloDiv.addClass("elecc-activa");
        let colorPeloColor = colorPeloDiv.attr("color");
        let colorPeloPrompt = colorPeloDiv.attr("texto");

        if(colorPeloPrompt) {
          this.hacerPrompt(colorPeloPrompt, 3);
        }

        if(colorPeloColor) {
        
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
        
        $("div[class~='fondo'] > img").addClass(colorPeloColor);
        $("div[class~='peinados'] > img").addClass(colorPeloColor);
        $("img[class~='cejas']").addClass(colorPeloColor);

        }

        // color ojos
        $("div[class~='ojo-color-elecc']").removeClass("elecc-activa");
        let colorOjosDiv = $("div[class~='ojo-color-elecc']").first();
        colorOjosDiv.addClass("elecc-activa");
        let colorOjosColor = colorOjosDiv.attr("color");
        let colorOjosPrompt = colorOjosDiv.attr("texto");

        if(colorOjosPrompt) {
          this.hacerPrompt(colorOjosPrompt, 2);
        }

        if(colorOjosColor) {
          
          $("img[class~='iris']").removeClass("negro");
          $("img[class~='iris']").removeClass("marron");
          $("img[class~='iris']").removeClass("rojo");
          $("img[class~='iris']").removeClass("amarillo");
          $("img[class~='iris']").removeClass("verde");
          $("img[class~='iris']").removeClass("azul");
          
          $("img[class~='iris']").addClass(colorOjosColor);
        }

       
      }
   
      let coletilla = "con una sonrisa ligera. muy importante que el estilo sea pop art y muy importante que el fondo sea blanco. muy importatente que solo haya una sola persona";
      this.hacerPrompt(coletilla, 8);
    });

    $("div[class~='loading']").hide();

    
   
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

    let imagen = $(e.target).closest("div[class~='gen-elecc-des']").attr("imagen");
    let texto = $(e.target).closest("div[class~='gen-elecc-des']").attr("texto");

    if(imagen && texto) {
      $("div[class~='torso'] > img").hide();
      $("img[class~='" + imagen +"']").show();

      
      this.hacerPrompt(texto, 0);
      this.updatearAvatar("",false,"",-1,true);
    }
  }

  // cambia la eleccion de cara (menu)
  eleccionCara(e:any) {
    $("div[class~='car-elecc-des']").removeClass("elecc-activa");
    $(e.target).closest("div[class~='car-elecc-des']").addClass("elecc-activa");

    let imagen = $(e.target).closest("div[class~='car-elecc-des']").attr("imagen")
    let texto = $(e.target).closest("div[class~='car-elecc-des']").attr("texto")

    if(imagen && texto) {
      $("div[class~='cabeza'] > img").hide();
      $("img[class~='" + imagen +"']").show();

      this.hacerPrompt(texto, 6);
      this.updatearAvatar("",false,"",-1,true);
    }
  }

  // cambia la eleccion del peinado (menu)
  eleccionPeinado(e:any) {
    $("div[class~='pel-elecc-des']").removeClass("elecc-activa");
    $(e.target).closest("div[class~='pel-elecc-des']").addClass("elecc-activa");

    let imagen = $(e.target).closest("div[class~='pel-elecc-des']").attr("imagen");
    let texto = $(e.target).closest("div[class~='pel-elecc-des']").attr("texto");
    let imagenBack = $(e.target).closest("div[class~='pel-elecc-des']").attr("imagen-back");
  

    if(imagen && texto) {
      $("div[class~='peinados'] > img").hide();
      $("img[class~='" + imagen +"']").show();

      this.hacerPrompt(texto, 4);
      this.updatearAvatar("",false,"",-1,true);

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

    let imagen = $(e.target).closest("div[class~='ojo-elecc-des']").attr("imagen")
    let texto = $(e.target).closest("div[class~='ojo-elecc-des']").attr("texto")

    if(imagen && texto) {
      $("div[class~='ojos'] > img").hide();
      $("img[class~='" + imagen +"']").show();

      this.hacerPrompt(texto, 1);
      this.updatearAvatar("",false,"",-1,true);
    }
  }

  // cambia la eleccion de la nariz (menu)
  eleccionNariz(e:any) {
    $("div[class~='nar-elecc-des']").removeClass("elecc-activa");
    $(e.target).closest("div[class~='nar-elecc-des']").addClass("elecc-activa");

    let imagen = $(e.target).closest("div[class~='nar-elecc-des']").attr("imagen")
    let texto = $(e.target).closest("div[class~='nar-elecc-des']").attr("texto")

    if(imagen && texto) {
      $("div[class~='narices'] > img").hide();
      $("img[class~='" + imagen +"']").show();

      this.hacerPrompt(texto, 7);
      this.updatearAvatar("",false,"",-1,true);
    }
  }

  // cambia la eleccion de la boca (menu)
  eleccionBoca(e:any) {
    $("div[class~='boc-elecc-des']").removeClass("elecc-activa");
    $(e.target).closest("div[class~='boc-elecc-des']").addClass("elecc-activa");

    let imagen = $(e.target).closest("div[class~='boc-elecc-des']").attr("imagen")
    let texto = $(e.target).closest("div[class~='boc-elecc-des']").attr("texto")

    if(imagen && texto) {
      $("div[class~='bocas'] > img").hide();
      $("img[class~='" + imagen +"']").show();

      this.hacerPrompt(texto, 5);
      this.updatearAvatar("",false,"",-1,true);
    }
  }

  // cambia la eleccion del color de los ojos (menu)
  eleccionColorOjos(e:any) {
    $("div[class~='ojo-color-elecc']").removeClass("elecc-activa");
    $(e.target).closest("div[class~='ojo-color-elecc']").addClass("elecc-activa");

    let color = $(e.target).closest("div[class~='ojo-color-elecc']").attr("color")
    let texto = $(e.target).closest("div[class~='ojo-color-elecc']").attr("texto")

   
    if(color && texto) {
      
      $("img[class~='iris']").removeClass("negro");
      $("img[class~='iris']").removeClass("marron");
      $("img[class~='iris']").removeClass("rojo");
      $("img[class~='iris']").removeClass("amarillo");
      $("img[class~='iris']").removeClass("verde");
      $("img[class~='iris']").removeClass("azul");
      
      $("img[class~='iris']").addClass(color);

      this.hacerPrompt(texto, 2);
      this.updatearAvatar("",false,"",-1,true);
    }
  }


  // cambia la eleccion del color del pelo
  eleccionColorPelo(e:any) {
    $("div[class~='pel-color-elecc']").removeClass("elecc-activa");
    $(e.target).closest("div[class~='pel-color-elecc']").addClass("elecc-activa");

    let color = $(e.target).closest("div[class~='pel-color-elecc']").attr("color")
    let texto = $(e.target).closest("div[class~='pel-color-elecc']").attr("texto")

   
    if(color && texto) {
      
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

      this.hacerPrompt(texto, 3);
      this.updatearAvatar("",false,"",-1,true);
    }
  }

  // updatea el array y regenera el prompt
  hacerPrompt(texto:String, posicion:any) {
    this.promptArray[posicion] = texto;

    this.prompt = this.promptArray.join(", ");

    console.log(this.prompt);
  }

  // updatea los datos del avatar mostrados en pantalla
  updatearAvatar(img:any , favoritoApi:Boolean, prompt:String, id:Number, esconderImg:Boolean) {
   

    if(esconderImg) {
      $("div[class~='avatar-ia']").hide();
      this.imagenActual = "";
      this.favorito = false;
      this.id = -1;
    } else {
      $("div[class~='avatar-ia']").show();
      let promptArray = prompt.split(", ");
      console.log(promptArray);
      this.imagenActual = this.service.imgUrl + img;
      this.favorito = favoritoApi;
      this.id = id;

      // inicializar caracteristicas

        // genero
        $("div[class~='gen-elecc-des']").removeClass("elecc-activa");

        let generoDiv = $("div[texto='" + promptArray[0] +"']").first()
        generoDiv.addClass("elecc-activa");
        let generoImagen = generoDiv.attr("imagen");
        let generoPrompt = generoDiv.attr("texto");

        if(generoPrompt) {
          this.hacerPrompt(generoPrompt, 0);
        }

        if(generoImagen) {
          $("div[class~='torso'] > img").hide();
          $("img[class~='" + generoImagen +"']").show();
        }

        // cara
        $("div[class~='car-elecc-des']").removeClass("elecc-activa");
        let caraDiv = $("div[texto='" + promptArray[6] +"'").first();
        caraDiv.addClass("elecc-activa");
        let caraImagen = caraDiv.attr("imagen");
        let caraPrompt = caraDiv.attr("texto");

        if(caraPrompt) {
          this.hacerPrompt(caraPrompt, 6);
        }

        if(caraImagen) {
          $("div[class~='cabeza'] > img").hide();
          $("img[class~='" + caraImagen +"']").show();
        }

        // pelo
        $("div[class~='pel-elecc-des']").removeClass("elecc-activa");
        let peinadoDiv = $("div[texto='" + promptArray[4] +"'").first();
        peinadoDiv.addClass("elecc-activa");
        let peinadoImagen = peinadoDiv.attr("imagen");
        let peinadoBack = peinadoDiv.attr("imagen-back")
        let peinadoPrompt = peinadoDiv.attr("texto");

        if(peinadoPrompt) {
          this.hacerPrompt(peinadoPrompt, 4);
        }

        if(peinadoImagen) {
          $("div[class~='peinados'] > img").hide();
          $("img[class~='" + peinadoImagen +"']").show();

          $("div[class~='fondo'] > img").hide();
          if(peinadoBack) {
            $("img[class~='" + peinadoBack +"']").show();
          }
        }

        // ojos
        $("div[class~='ojo-elecc-des']").removeClass("elecc-activa");
        let ojosDiv = $("div[texto='" + promptArray[1] +"'").first();
        ojosDiv.addClass("elecc-activa");
        let ojosImagen = ojosDiv.attr("imagen");
        let ojosPrompt = ojosDiv.attr("texto");

        if(ojosPrompt) {
          this.hacerPrompt(ojosPrompt, 1);
        }

        if(ojosImagen) {
          $("div[class~='ojos'] > img").hide();
          $("img[class~='" + ojosImagen +"']").show();
        }

        // nariz
        $("div[class~='nar-elecc-des']").removeClass("elecc-activa");
        let narizDiv = $("div[texto='" + promptArray[7] +"'").first();
        narizDiv.addClass("elecc-activa");
        let narizImagen = narizDiv.attr("imagen");
        let narizPrompt = narizDiv.attr("texto");

        if(narizPrompt) {
          this.hacerPrompt(narizPrompt, 7);
        }

        if(narizImagen) {
          $("div[class~='narices'] > img").hide();
          $("img[class~='" + narizImagen +"']").show();
        }

        // boca
        $("div[class~='boc-elecc-des']").removeClass("elecc-activa");
        let bocaDiv = $("div[texto='" + promptArray[5] +"'").first();
        bocaDiv.addClass("elecc-activa");
        let bocaImagen = bocaDiv.attr("imagen");
        let bocaPrompt = bocaDiv.attr("texto");

        if(bocaPrompt) {
          this.hacerPrompt(bocaPrompt, 5);
        }

        if(bocaImagen) {
          $("div[class~='bocas'] > img").hide();
          $("img[class~='" + bocaImagen +"']").show();
        }

        // color pelo
        $("div[class~='pel-color-elecc']").removeClass("elecc-activa");
        let colorPeloDiv = $("div[texto='" + promptArray[3] +"'").first();
        colorPeloDiv.addClass("elecc-activa");
        let colorPeloColor = colorPeloDiv.attr("color");
        let colorPeloPrompt = colorPeloDiv.attr("texto");

        if(colorPeloPrompt) {
          this.hacerPrompt(colorPeloPrompt, 3);
        }

        if(colorPeloColor) {
        
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
        
        $("div[class~='fondo'] > img").addClass(colorPeloColor);
        $("div[class~='peinados'] > img").addClass(colorPeloColor);
        $("img[class~='cejas']").addClass(colorPeloColor);

        }

        // color ojos
        $("div[class~='ojo-color-elecc']").removeClass("elecc-activa");
        let colorOjosDiv = $("div[texto='" + promptArray[2] +"'").first();
        colorOjosDiv.addClass("elecc-activa");
        let colorOjosColor = colorOjosDiv.attr("color");
        let colorOjosPrompt = colorOjosDiv.attr("texto");

        if(colorOjosPrompt) {
          this.hacerPrompt(colorOjosPrompt, 2);
        }

        if(colorOjosColor) {
          
          $("img[class~='iris']").removeClass("negro");
          $("img[class~='iris']").removeClass("marron");
          $("img[class~='iris']").removeClass("rojo");
          $("img[class~='iris']").removeClass("amarillo");
          $("img[class~='iris']").removeClass("verde");
          $("img[class~='iris']").removeClass("azul");
          
          $("img[class~='iris']").addClass(colorOjosColor);
        }

        console.log(this.prompt);
    }
  }


  // llama a la api
  crearImagen() {
    $("div[class~='loading']").show();
    $("button[class~='btn-ver']").hide();
    $("button[class~='btn-ver-disabled']").show();

    
    this.service.crearAvatar(this.prompt).subscribe({
      next: (data) => 
      {
        this.updatearAvatar(data.imagenNombre,data.favorito,data.prompt as string ,data.id , false)
        $("div[class~='loading']").hide();
        $("button[class~='btn-ver-disabled']").hide();
        $("button[class~='btn-ver']").show();
        this.router.navigate(['/editor', this.id]);
      },
      error: (error) =>
      {
        console.log("hubo un error");
        $("div[class~='loading']").hide();
        $("button[class~='btn-ver']").show();
        $("button[class~='btn-ver-disabled']").hide();
        this.updatearAvatar("",false,"",-1,true);
      }

    })

    
  }

    // cambia a favorito la imagen
    hacerFavorito() {
      this.service.hacerFavorito(this.id).subscribe({
        next: (data) => 
        {
          this.favorito = data.favorito;
        },
        error: (error) =>
        {
          console.log("hubo un error");
        }
      })
    }
  
    // cambia a no favorito la imagen
    deshacerFavorito() {
      this.service.deshacerFavorito(this.id).subscribe({
        next: (data) => 
        {
          this.favorito = data.favorito;
        },
        error: (error) =>
        {
          console.log("hubo un error");
        }
      })
    }

 

}
