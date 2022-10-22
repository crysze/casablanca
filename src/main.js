import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Home from './components/home/TheHome.vue';
import News from './components/news/NewsItems.vue';
import NewsArticle from './components/news/NewsArticle.vue';
import Team from './components/team/TheTeam.vue';
import Contact from './components/contact/ContactForm.vue';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHeadset, faEnvelope, faPhone, faArrowUp } from '@fortawesome/free-solid-svg-icons';

library.add(faHeadset, faEnvelope, faPhone, faArrowUp);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/news', component: News },
    { path: '/article', component: NewsArticle },
    { path: '/team', component: Team },
    { path: '/contact', component: Contact }
  ],
  linkActiveClass: 'active'
});

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);

app.mount('#app');
