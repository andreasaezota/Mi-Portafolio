<template>
    <!-- Contenedor principal para la sección "Sobre mí" -->
  <div class="about">
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <img src="../assets/Imagen.jpeg" alt="Foto de perfil" class="card-img-top" style="border-radius: 1%;">
        </div>
      </div>
      <!-- Columna para la descripción -->
      <div class="col-md-8">
        <div class="card" style="background-color:  rgb(174, 125, 244);">
          <div class="card-body">
            <h2 class="card-title">¿Quien Soy?</h2>
            <p class="card-text lead">Mi nombre es Andrea Sáez - Soy Kinesióloga de profesión. Actualmente  me encuentro adquiriendo habilidades para aprender sobre desarrollo Front-end  a través de un bootcamps de talento digital,  desde marzo (2024). Este curso me a permitido aprender desde 0 nuevas habilidades y a la utilizar herramientas como HTML5, CSS, Js, Bootstrap, jQuery,Sass, Node, Vue, Github y Firebase. Ha sido una gran esperiencia de aprendizaje. <br>
              Me considero una persona perseverante, con espíritu de superación, me gusta estar en constante aprendizaje. 
              En mi tiempo libre, disfruto de la aventura, la naturaleza, me apasiona la lectura y la música.</p>
            <h3 class="card-title">Intereses</h3>
            <ul class="interests-list">
              <li class="card-text">Cine</li>
              <li class="card-text">Viajes</li>
              <li class="card-text">Pasar tiempo en familia</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Información adicional en una tarjeta -->
      <div class="card" style="background-color:  rgb(174, 125, 244);">
          <div class="card-body">
            <h2 class="card-title">Mi Direccción</h2>
            <p class="card-text lead">En la actualidad mi domicilo se encuentra en Chile, Region Metropolitana Macul. Los fines de semana me traslado a la Comuna de San José de Maipo, para visitar a mi familia.</p>
              <h2 class="card-title">¿A que me dedico?</h2>
            <p class="card-text lead">Actualmente adquiriendo habilidades de desarrollador Front-End</p>
            <h2 class="card-title">Formación</h2>
            <p class="card-text lead"> Año 2024, Programa Talento Digital, Bootcamp intensivo de Desarrollador de Aplicaciones Front-End Trainee. </p>
          
            <h2 class="card-title">Experiencia previas</h2>
            <p class="card-text lead"> No cuento con experiencia previa, ¿Por qué deberían contactarme? soy una persona responsable, puntual, con ganas de aprender y me gusta el trabajo en equipo. </p>
            <h2 class="card-title">Dirígete a contacto, Si me quieres contactar!!</h2>
          </div>
        </div>
    </div>
  </div>
  <!-- Enlace para redirigir a la sección de proyectos -->
  <p class="card-text"></p>
  <a href="#" class="btn btn-secondary">   <router-link class="nav-link" to="/proyectos">Mis proyectos</router-link> </a>
</div>
</template>

<script>
export default {
   // Define el nombre del componente
  name: "AboutMe",
};
</script>

<style scoped>
.about {
  background-color: rgb(176, 224, 230);
  padding: 20px 0;
}

.interests-list {
  list-style-type: none;
  padding-left: 0;
}

.card {
  margin-bottom: 20px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  
}

.card-title {
  color: #151414;
}

.card-text {
  color: #0b0b0b;
}

.text-white {
  color: #16d0e1;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.mt-5 {
  margin-top: 3rem;

}
</style>


