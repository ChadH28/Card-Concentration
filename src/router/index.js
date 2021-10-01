import { createRouter, createWebHashHistory } from 'vue-router'
import playerScreen from '../views/PlayerScreen.vue'
import gameScreen from '../views/GameScreen.vue'
import winnerScreen from '../views/WinnerScreen.vue'

const routes = [
  {
    path: '/',
    name: 'playerScreen',
    component: playerScreen
  },
  {
    path: '/game',
    name: 'gameScreen',
    component: gameScreen
  },
    {
    path: '/winner',
    name: 'winnerScreen',
    component: winnerScreen
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router