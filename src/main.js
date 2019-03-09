import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Daily from './components/DailySchedule.vue'
import match from './components/MatchSchedules.vue'
import player from './components/PlayerProfile.vue'
import team from './components/TeamProfile.vue'
import notfound from './components/NotFound.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Daily,
  name: 'Daily',
  props: true
},
{
  path: '/match',
  name: 'match',
  component: match,
  props: true
},
{
  path: '/player',
  name: 'player',
  component: player,
  props: true
},
{
  path: '/team',
  name: 'team',
  component: team,
  props: true
},
{
  path: '*',
  name: '*',
  component: notfound,
  props: true
}
];
const router = new VueRouter({
  routes,
  mode: 'history'
})
new Vue({
  render: h => h(App),
  router,
  data: {}
}).$mount('#app')
