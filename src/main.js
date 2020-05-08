import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

import VueTextareaAutosize from "vue-textarea-autosize";
Vue.use(VueTextareaAutosize);

import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBVmwKzFL_Hea-cNEMtyd7yqQSxf5Jt_hg",
  authDomain: "vue-calendario-995af.firebaseapp.com",
  databaseURL: "https://vue-calendario-995af.firebaseio.com",
  projectId: "vue-calendario-995af",
  storageBucket: "vue-calendario-995af.appspot.com",
  messagingSenderId: "287234017782",
  appId: "1:287234017782:web:1d06456df56e892d4b9fd7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
 
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
