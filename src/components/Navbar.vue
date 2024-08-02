<template >
  <!-- Contenedor principal del componente -->
  <div>
        <!-- Barra de navegación (navbar) con fondo gris claro -->
    <nav class="navbar navbar-expand-lg" style=" background-color: rgb(220, 220, 220);">
      <!-- Contenedor fluido para la barra de navegación -->
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <img class="logo" alt="Vue logo" src="../assets/AS.png" style="border-radius: 50%;" width="50px">
          <div class="navbar-nav">
            <!-- Estos enlaces permiten la navegación entre las diferentes rutas de la aplicación -->
            <router-link class="nav-link" to="/">Home</router-link> |
            <router-link class="nav-link" to="/about">Acerca de mí</router-link> |
            <router-link class="nav-link" to="/proyectos">Mis proyectos</router-link> |
            <router-link class="nav-link" to="/contacto">Contacto</router-link> 
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  
}
</script>
<style >
  
</style>