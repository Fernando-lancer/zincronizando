<template>
  <v-container grid-list-lg>
    <v-layout roe wrap>
      <v-flex md6>
        <v-card class="mb-3" v-for="(item,index) in listaTareas" :key="index">
          <v-card-text>
            <v-chip class="ma-2 ml-0" color="pink" label text-color="white">
              <v-icon left>mdi-label</v-icon>{{item.titulo}}
            </v-chip>
            <p>
              {{item.descripcion}}
            </p>

            <v-btn color="warning" class="mr-3" @click="editarTarea(index)">Editar</v-btn>
            <v-btn color="error" @click="eliminarTarea(item.id)">Eliminar</v-btn>
          </v-card-text>
        </v-card>
        
      </v-flex>

      <v-flex md6 v-if="formAgregar">
        <v-card class="mb-3 pa-3">
            <v-form @submit.prevent="agregarTarea">
                <v-text-field label="tarea" v-model="titulo"></v-text-field>
                <v-textarea label="descripcion de la tarea" v-model="descripcion"></v-textarea>
                <v-btn color="success" block type="sibmit" v-on:keyup.enter ="sibmit">Agregar tarea</v-btn>
            </v-form>
        </v-card>
      </v-flex>
      <v-flex md6 v-if="!formAgregar">
        <v-card class="mb-3 pa-3">
            <v-form @submit.prevent="editar">
                <v-text-field label="tarea" v-model="titulo"></v-text-field>
                <v-textarea label="descripcion de la tarea" v-model="descripcion"></v-textarea>
                <v-btn color="warning" block type="sibmit">Editar</v-btn>
            </v-form>
        </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar
      v-model="snackbar"
    >
      {{ mensaje }}
      <v-btn
        color="pink"
        text
        @click="snackbar = false"
      >
        Cerrar
      </v-btn>
    </v-snackbar>
  </v-container>
</template>
<script>
export default {
  name: "Tareas",
  data(){
      return {
          listaTareas: [],
          titulo:'',
          descripcion: '',
          snackbar: false,
          mensaje: '',
          formAgregar: true,
          indexTarea: ''
      }
      
  },methods:{
      agregarTarea(){
          console.log(this.titulo, this.descripcion)
          if (this.titulo === '' || this.descripcion === '') {
              console.log('vacio')
              this.snackbar = true
              this.mensaje = 'llena tu tarea'
          } else {
              console.log('error')
              this.listaTareas.push({
                  id: Date.now(),
                  titulo: this.titulo,
                  descripcion: this.descripcion
              })
              this.titulo = '',
              this.descripcion = '',
              this.snackbar = true,
              this.mensaje = 'Tarea agregada'
              
          }
          localStorage.setItem('gym-vue-tarea', JSON.stringify(this.listaTareas))
      },
      eliminarTarea(id){
          console.log(id)
          this.listaTareas = this.listaTareas.filter( e => e.id != id)
          localStorage.setItem('gym-vue-tarea', JSON.stringify(this.listaTareas))
      },
      editarTarea(index){
          this.formAgregar = false
          this.titulo = this.listaTareas[index].titulo
          this.descripcion = this.listaTareas[index].descripcion
          this.indexTarea = index
          localStorage.setItem('gym-vue-tarea', JSON.stringify(this.listaTareas))
      },
      editar(){
          this.listaTareas[this.indexTarea].titulo = this.titulo
          this.listaTareas[this.indexTarea].descripcion = this.descripcion
          this.formAgregar = true
          this.titulo = ''
          this.descripcion = ''
          this.snackbar = true,
          this.mensaje = 'Tarea editada'
          localStorage.setItem('gym-vue-tarea', JSON.stringify(this.listaTareas))
      }
      },
      created : function () {
      let datosDB = JSON.parse(localStorage.getItem('gym-vue-tarea'))
      console.log(datosDB)
      if (datosDB === null) {
        this.listaTareas = []
      } else {
        this.listaTareas = datosDB 
      }
    },
};
</script>