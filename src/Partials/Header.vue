<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-sheet
      class="overflow-hidden"
      style="position: relative;"
      > 
        <v-container>
          <v-toolbar dense>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon :to="{ name: 'Botones'}" text color="warning">
        <v-icon >games</v-icon>
      </v-btn>

      <v-btn icon :to="{ name: 'Vuetify'}" text  color="info">
        <v-icon>grade</v-icon>
      </v-btn>

      <v-btn icon :to="{ name: 'Home'}" text color="pink">
        <v-icon >calendar_view_day</v-icon>
      </v-btn>
      <v-btn icon :to="{ name: 'Toolbar'}" text color="pink">
        <v-icon >fingerprint</v-icon>
      </v-btn>
      <v-btn icon :to="{ name: 'Tareas'}" text color="pink">
        <v-icon >alarm_on</v-icon>
      </v-btn>
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
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
        </v-container>
        </v-sheet>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    name: 'Header',
    data(){
        return {
            drawer: null,
      items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' },
        ],
        }
    }
}
</script>