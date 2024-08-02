<template>
    <!-- Contenedor principal para la sección de contacto -->
  <div class="contacto1">
    <div class="redes">
      
      <a href="" class="red-social"></a>
    </div>
    <!-- Contenedor para la información de contacto -->
        <!-- Información de contacto con iconos -->
    <div class="contacto">
      <h1>Andrea Sáez Otárola</h1>
      <h3>
        Telefono: +56944987734
        <img class="logo" alt="Vue logo" src="../assets/pngegg (2).png" width="50px"><br> 
      
      </h3>
      <h3> 
        Correo: andreasaezo@gmail.com
        <img class="logo" alt="Vue logo" src="../assets/pngegg (3).png" width="50px"><br>
      </h3>
      <h3> 
      Github: https://github.com/andreasaezota
        <img class="logo" alt="Vue logo" src="../assets/pngegg.png" width="50px"><br>
      </h3>
      <h3> 
        https://instagram.com/andresaezota
        <img class="logo" alt="Vue logo" src="../assets/pngegg (1).png" width="50px"><br>
      </h3>
      <h3> 
        Linkedin: 
        https://www.linkedin.com/in/andrea-s%C3%A1ez-b4659931b/
        <img class="logo" alt="Vue logo" src="../assets/linkedin.png" width="50px"><br>
      </h3>
    </div>
    <img class="logo3" alt="Vue logo" src="../assets/developer-icono.png" width="50px">
  </div>
  <div>
  </div>

</template>

<script>
export default {
    // Define el nombre del componente
  name: "Contacto",
};
</script>

<style scoped>
/* Estilos para el componente Contacto */
.contacto1{
  background-color: rgb(187, 182, 194);
}
.contacto {
  font-family: Arial, sans-serif;
  border: 5px solid #0dd7e9;
  padding: 20px;
  margin: 20px;
}

.redes {
  margin-bottom: 10px;
}

.red-social {
  text-decoration: none;
  color: #201f1f;
  margin-right: 10px;
}

.red-social i {
  font-size: 24px;
}

.nombre {
  text-decoration: none;
  color: #eeeef1;
}

.nombre span {
  font-weight: bold;
}
.logo{
  border-radius: 50%;
}

</style>