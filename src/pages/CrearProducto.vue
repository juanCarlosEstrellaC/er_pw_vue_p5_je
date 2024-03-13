<template>
  <h1>Crear Producto</h1>

  <div class="container" v-if="!mostrarMensaje">
    <label for="">Codigo de Barras</label>
    <input type="text" v-model="codigoBarras" />
    <label for="">Nombre</label>
    <input type="text" v-model="nombre" />
    <label for="">Stock</label>
    <input type="number" v-model="stock" />
    <label for="">Fecha de caducidad</label>
    <input type="date" v-model="fechaCaducidad" />

    <button @click="botonGuardar">Guardar</button>
  </div>
  <div v-else class="container">
    <h3>Guardado exitoso</h3>
    <button @click="botonAceptar">Aceptar</button>
  </div>
</template>

<script>
import { guardarFachada } from "@/helpers/clienteProducto";

export default {
  data() {
    return {
      codigoBarras: null,
      nombre: null,
      stock: null,
      fechaCaducidad: null,
      mostrarMensaje: false,
    };
  },
  methods: {
    async botonGuardar() {
      const prod = {
        codigoBarras: this.codigoBarras,
        nombre: this.nombre,
        stock: this.stock,
        fechaCaducidad: this.fechaCaducidad,
      };

      const r = await guardarFachada(prod);
      if (r == 1) {
        this.mostrarMensaje = true;
      } else {
        alert("Error al ingresar su producto.");
      }
    },
    botonAceptar() {
      this.mostrarMensaje = false;
      this.codigoBarras = null;
      this.nombre = null;
      this.stock = null;
      this.fechaCaducidad = null;
      this.mostrarMensaje = null;
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  margin: 10px auto;
  background-color: aquamarine;
  border: solid 1px black;
}

button {
  margin: 2%;
}

input{
  text-align: center;
}
</style>