<template>
<!-- Contenedor principal con fondo azul claro y diseño flex -->
  <div class="proyectos" style="display: flex; background-color: rgb(176, 224, 230)">
<!-- Contenedor para el diseño de las tarjetas de proyectos -->
    <div  class="container mt-5">
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="../assets/img/viajes chile .png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Viajes Chile</h5>
            <p class="card-text">La agencia Viajes Chile solicita la creación de su landing page, que tenga un diseño atractivo
e innovador, utilizando los conocimientos que has adquirido a través de las distintas
unidades.
</p>
          
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="../assets/img/Olivia Ros.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Olivia Ros</h5>
            <p class="card-text">Este ejercicio guiado está pensado en dar énfasis a la marca personal de una persona
llamada Olivia Ros, en donde construiremos un sitio web con distintos componentes y
secciones popularmente conocidos como el Navbar, Hero Section, Acerca de mí, una
sección que sirva como portafolio para mostrar proyectos creados, sección de contacto y el
Footer o pie de página.
.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="../assets/img/Ricomida.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Ricomida</h5>
            <p class="card-text">Consiste en la construcción de una página web relacionada con la preparación de comidas y
muestra de recetas, donde todo el sitio debe estar construido con características
responsivas, partiendo de una maqueta con su guía de estilos.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <!-- Sección para mostrar las herramientas utilizadas -->
<div class="card1">
  <div class="card-header">
    <h1>Herramientas</h1>
  </div>
  <div class="card-body">
    <!-- Contenedor para las imágenes de las herramientas -->
    <h5>   <div class="row">
    <div class="col">
      <img alt="Imagen 2" src="../assets/bootstrap-logo.png" width="65px" style="border-radius: 50%;">
    </div>
    <div class="col">
    
      <img alt="Imagen 2" src="../assets/html.png" width="65px" style="border-radius: 50%;">
    </div>
    <div class="col">
      <img alt="Imagen 2" src="../assets/js.png" width="65px"style="border-radius: 50%;">
    </div>
    <div class="col">
      <img alt="Imagen 2" src="../assets/css.png" width="65px" style="border-radius: 50%;">
    </div>
    <div class="col">
      <img alt="Imagen 2" src="../assets/logo.png" width="65px" style="border-radius: 50%;">
    </div>
    <div class="col">
      <img alt="Imagen 2" src="../assets/firebase.png" width="65px" style="border-radius: 50%;">
    </div>
    <div class="col">
      <img alt="Imagen 2" src="../assets/Git.png" width="65px" style="border-radius: 50%;">
    </div>
    <div class="col">
      <img alt="Imagen 2" src="../assets/Sass.png" width="65px" style="border-radius: 50%;">
    </div>
  </div></h5>
    <p class="card-text"></p>
    <a href="#" class="btn btn-primary">  </a>
  </div>
</div>
</template>


<!-- Estilo para las imágenes dentro del pie de página -->
<style scoped>
.proyectos {
  background-color: rgb(187, 182, 194);
}

.card {
  background-color: rgb(174, 125, 244);
  transition: transform 0.2s ease;
  position: relative;
}
.card1{
  background-color: rgb(187, 182, 194);
}

.card:hover {
  transform: translateY(-5px);
}

.text-center img {
  transition: transform 0.2s ease;
}

.text-center img:hover {
  transform: scale(1.1);
}
.herramientas{
  background-color: rgb(187, 182, 194);
}
</style>
