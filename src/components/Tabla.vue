<template>
  <button @click="botonConsultar">Consultar</button>
  <div>
    <table>
      <thead>
        <tr>
          <th>Codigo de Barras</th>
          <th>Nombre</th>
          <th>Actualizar</th>
          <th>Eliminar</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="p in listaProductos" :key="p.codigoBarras">
          <td>{{ p.codigoBarras }}</td>
          <td>{{ p.nombre }}</td>

          <td>
            <button @click="actualizar(p.links)">Actualizar</button>
          </td>
          <td>
            <button @click="eliminar(p.codigoBarras)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { consultarDTOSFachada, consultarLinkFachada, eliminarFachada } from "@/helpers/clienteProducto";

export default {
  data() {
    return {
      listaProductos: [],
    };
  },
  methods: {
    async botonConsultar() {
      const r = await consultarDTOSFachada();
      console.log(r);
      this.listaProductos = r;
      console.log(this.listaProductos);
    },
    async eliminar(codigoBarras){
      const r = await eliminarFachada(codigoBarras);
      if (r == 1) {
        this.botonConsultar();
      } else {
        
      }
    },
    async actualizar(link){
      console.log(link);
      const linkReal = link[0].href;
      console.log(linkReal);
      const producto = await consultarLinkFachada(linkReal);
      console.log(producto); 
      this.$emit("eventoActualizar", producto)
    }
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #f2f2f2;
}


</style>