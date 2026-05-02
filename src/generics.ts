interface Producto<T> {
    id: number;
    nombre: string;
    precio: number;
    detalles: T;
}

const mostratProducto = <T>(detalles: T[]) : string => {
    return `Detalles del producto: ${detalles.map(detalle => JSON.stringify(detalle)).join(', ')}`;
}

