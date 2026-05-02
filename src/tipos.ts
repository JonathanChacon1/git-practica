interface Usuario {
    id: number;
    nombre: string;
    email: string;
    edad: number;
    tipoDocumento: Tipodocumento;
}

type Tipodocumento = 'Tarjeta de identidad' | 'Cédula de ciudadanía';

const saludo = (usuario: Usuario) : string => {
    return `Hola, ${usuario.nombre}!`;
}

console.log(saludo({
    id: 1,
    nombre: 'Juan',
    email: 'juan@example.com',
    edad: 30,
    tipoDocumento: 'Cédula de ciudadanía'
}));