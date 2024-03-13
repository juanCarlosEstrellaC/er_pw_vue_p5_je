<template>
  <h1>Detalle de Producto</h1>

  <div class="container" v-if="!mostrarMensaje">
    <label for="">Codigo de Barras</label>
    <input type="text" v-model="productoProp.codigoBarras" />
    <label for="">Nombre</label>
    <input type="text" v-model="productoProp.nombre" />
    <label for="">Stock</label>
    <input type="number" v-model="productoProp.stock" />
    <label for="">Fecha de caducidad</label>
    <input type="date" v-model="productoProp.fechaCaducidad" />

    <button @click="botonGuardar">Actualizar</button>
  </div>
  <div v-else class="container">
    <h3>Guardado exitoso</h3>
    <button @click="botonAceptar">Aceptar</button>
  </div>
</template>
  
  <script>
import { actualizarFachada } from "@/helpers/clienteProducto";

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
  props: {
    productoProp: {
      type: Object,
      default: () => ({
        codigoBarras: null,
        nombre: null,
        stock: null,
        fechaCaducidad: null,
      }),
    },
  },
  methods: {
    async botonGuardar() {
      const prod = {
        codigoBarras: this.productoProp.codigoBarras,
        nombre: this.productoProp.nombre,
        stock: this.productoProp.stock,
        fechaCaducidad: this.productoProp.fechaCaducidad,
      };

      this.codigoBarras = this.productoProp.codigoBarras;
      this.nombre = this.productoProp.nombre;
      this.stock = this.productoProp.stock;
      this.fechaCaducidad = this.productoProp.fechaCaducidad;
      console.log(this.nombre);
      console.log(this.stock);
      console.log(this.nombre);

      console.log(prod);

      const r = await actualizarFachada(this.codigoBarras, prod);
      console.log(r);
      if (r == 1) {
        //this.mostrarMensaje = true;
      } else {
        alert("Error al actualizar su producto.");
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

input {
  text-align: center;
}
</style>