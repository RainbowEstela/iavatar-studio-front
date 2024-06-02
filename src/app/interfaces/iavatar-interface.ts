export interface UserIavatar {
    username:String;
    token:String;
}

export interface Creador {
    username:String;
}

export interface UserRegister {
    username:String;
    email:String;
}

export interface IAimage {
    id:Number;
    prompt:String | null;
    imagenNombre: String;
    fechaCreacion: Date;
    favorito: Boolean;
    creador: Creador;
}