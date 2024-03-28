import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/PreviousWorks.vue')
    },
    {
      path: '/my-cv',
      name: 'My CV',
      component: () => import('../views/MyCv.vue')
    },
    {
      path: '/previous-works',
      name: 'Previous Works',
      component: () => import('../views/PreviousWorks.vue')
    },
    {
      path: '/projects-in-progress',
      name: 'Projects in Progress',
      component: () => import('../views/ProjectsInProgress.vue')
    },
    {
      path: '/testimonials',
      name: 'Testimonials',
      component: () => import('../views/Testimonials.vue')
    },
    {
      path: '/previous-works/notes-app',
      name: 'Notes App',
      component: () => import('../views/NotesApp.vue')
    },
    {
      path: '/previous-works/todo-app',
      name: 'Todo App',
      component: () => import('../views/TodoApp.vue')
    }
  ]
})

export default router
