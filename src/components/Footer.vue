<template lang="">
  <!-- Este es el contenedor de pie de página (footer) con padding y un color de fondo específico -->
  <footer class="py-5 px-5" style=" background-color: rgb(220, 220, 220);">
    <router-link class="nav-link col-3" to="/contacto"> 
      <!-- Imagen que actúa como logotipo, con un estilo de borde redondeado -->
      <img class="logo" alt="Vue logo" src="../assets/AS.png" style="border-radius: 30%;" >
      
      Ir a Contacto</router-link> 
  </footer>
</template>
<script>
export default {

}
</script>
<style>
/* Estilo para las imágenes dentro del pie de página (footer) */
footer img {
  height: 6.25rem;
}
</style>