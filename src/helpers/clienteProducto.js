import axios from "axios";

const guardar = async (producto) => {
    return axios.post(`http://localhost:8082/API/v1.0/Inventario/productos`, producto).then(r => r.data);
}

const consultarDTOS = async () => {
    return axios.get(`http://localhost:8082/API/v1.0/Inventario/productos`).then(r => r.data);
}

const eliminar = async (codigoBarras) => {
    return axios.delete(`http://localhost:8082/API/v1.0/Inventario/productos/${codigoBarras}`).then(r => r.data);
}

const actualizar = async (codigoBarras, producto) => {
    return axios.patch(`http://localhost:8082/API/v1.0/Inventario/productos/${codigoBarras}`, producto).then(r => r.data);
}

const consultarLink = async (link) => {
    return axios.get(link).then(r => r.data);
}

//FACHADA y export
export const guardarFachada = async (producto) => {
    return await guardar(producto);
}

export const consultarDTOSFachada = async () => {
    return await consultarDTOS();
}

export const eliminarFachada = async (codigoBarras) => {
    return await eliminar(codigoBarras);
}

export const actualizarFachada = async (codigoBarras, producto) => {
    return await actualizar(codigoBarras, producto);
}

export const consultarLinkFachada = async (link) => {
    return await consultarLink(link);
}