// Importa las funciones necesarias de Vue Router
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// Define las rutas de la aplicación
const routes = [
  {
     // Ruta para la página de inicio
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/proyectos',
    name: 'proyectos',
    component: () => import(/* webpackChunkName: "proyectos" */ '../views/ProyectosView.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import(/* webpackChunkName: "contacto" */ '../views/ContactoView.vue')
  },

]
// Crea una instancia del enrutador con historial en modo HTML5
const router = createRouter({
  // Utiliza el historial de navegador para una navegación sin recargas de página
  history: createWebHistory(process.env.BASE_URL),
   // Pasa las rutas definidas al enrutador
  routes
})
// Exporta la instancia del enrutador para que pueda ser utilizada en la aplicación
export default router
