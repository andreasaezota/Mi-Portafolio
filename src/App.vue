<template>
  <!-- Componente Navbar que se muestra en la parte superior de la página -->
  <Navbar />
  <router-view/>
  <Footer />
</template>

<script>
// Importa el componente Navbar y footer desde el archivo correspondiente
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

  export default {
    // Declara los componentes que serán utilizados en el template
    components: {
      Navbar, // Registro del componente Navbar
      Footer  // Registro del componente Footer
    }
  }
</script>

<style> /* Estilos */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
