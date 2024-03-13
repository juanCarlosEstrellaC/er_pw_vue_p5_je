<template>
  <PrincipalPage />
  <router-view />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import CrearProducto from "./pages/CrearProducto.vue";
import PrincipalPage from './pages/PrincipalPage.vue';

export default {
  name: "App",
  components: {
    HelloWorld,
    CrearProducto,
    PrincipalPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
