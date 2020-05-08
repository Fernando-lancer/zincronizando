<template>
  <v-app>
    
    <v-content>
       
      <v-container>
         
        <v-container>
          <v-toolbar dense color="info">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
      <v-navigation-drawer 
      v-model="drawer" 
      absolute 
      temporary 
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg">
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          
          <v-list-item link :to="{name:'Home'}" > 

            <v-list-item-icon  >             
                <v-icon >dashboard</v-icon>
            </v-list-item-icon>
            
            <v-list-item-content>
              <v-list-item-title>Calendario</v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>

          <v-list-item link :to="{name:'Calendario'}" > 

            <v-list-item-icon  >             
                <v-icon >calendar_today</v-icon>
            </v-list-item-icon>
            
            <v-list-item-content>
              <v-list-item-title>Calendario 2</v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>

           <v-list-item link :to="{name:'Botones'}" > 
            <v-list-item-icon  >             
                <v-icon >games</v-icon>
            </v-list-item-icon>
            
            <v-list-item-content>
              <v-list-item-title>Botones</v-list-item-title>
            </v-list-item-content>

            </v-list-item>

           <v-list-item link :to="{name:'Tareas'}"  > 
            <v-list-item-icon >             
                <v-icon >keyboard_hide</v-icon>
            </v-list-item-icon>
            
            <v-list-item-content>
              <v-list-item-title>Tarea</v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>
           <v-list-item link :to="{name:'Vuetify'}" > 
            <v-list-item-icon  >             
                <v-icon >access_alarms</v-icon>
            </v-list-item-icon>
            
            <v-list-item-content>
              <v-list-item-title>Vuetify</v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>
          
        </v-list>
      </v-navigation-drawer>
        </v-container>
    

        <!-- fin nabar -->
          
        <router-view /> 
        <v-dialog 
        v-model="loading.estado" 
        hide-overlay 
        persistent 
        width="300">
          <v-card :color="loading.color" dark>
            <v-card-text>
              {{loading.titulo}}
              <v-progress-linear 
              indeterminate 
              color="accent" 
              class="mb-0">
              </v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  data(){
    return {
       drawer: null,
     
    }
  },
  name: "App",
  components: {},

  computed: {
    ...mapState(['loading'])
  }
};
</script>
