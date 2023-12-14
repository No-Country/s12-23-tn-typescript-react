class updateUserDto {
  nombre?: string;
  contrasena?: string;
  confirmContrasena?: string;
  email?: string;
  rol_id?: number;

  constructor(nombre: string, contrasena: string, confirmContrasena: string, email: string, rol_id: number) {
    this.nombre = nombre;
    this.contrasena = contrasena;
    this.confirmContrasena = confirmContrasena;
    this.email = email;
    this.rol_id = rol_id;
  }
}

export { updateUserDto };
