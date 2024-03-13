<template>
  <h1>Consultar Producto</h1>
  <Tabla @eventoActualizar="actualizar($event)" />
  <Detalle :productoProp="producto"/>
</template>

<script>
import Tabla from "@/components/Tabla.vue";
import Detalle from '@/components/Detalle.vue';
export default {
  components: { Tabla, Detalle },
  data() {
    return {
      producto: {
        codigoBarras: null,
        nombre: null,
        stock: null,
        fechaCaducidad: null,
      },
    };
  },
  methods: {
    actualizar(producto) {
      this.producto = producto;
      console.log(this.producto);
    },
  },
};
</script>

<style>
</style>