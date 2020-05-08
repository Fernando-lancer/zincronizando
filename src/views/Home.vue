<template>
<v-container>
    <v-layout :wrap="true">          
        <v-flex xs12>
                 <v-card>
                <v-date-picker
                 v-model="fecha"
                 full-width
                 locale="es-cl"
                 :min="minimo"
                 :max="maximo"
                 @change="getdolar(fecha)"
                 > 

                </v-date-picker>
            </v-card>
            <v-card color="accent" dark >
                <v-card-text class="display-1 text-xs-center text-sm-center" >
                    {{datos}}
                                      
                </v-card-text>
            </v-card>
        
             
            
        </v-flex>
        <pre>
           
        </pre>
    </v-layout>
</v-container>     
</template>
<script>

import  axios from 'axios'
import { mapMutations } from 'vuex'
// import Toolbar from '@/components/Toolbar.vue'
export default {
   name: 'Home',
   data(){
       return{
           fecha: new Date().toISOString().substr(0,10),
           minimo : '1984',
           maximo :  new Date().toISOString().substr(0,10),
           datos: '',
       }
   },
   methods: {
       ...mapMutations(['mostrarLoading', 'ocultarLoading']),
   async  getdolar(dia){
        console.log(dia)
           let arrayFecha = dia.split(['-'])
           console.log(arrayFecha)
           let ddmmyy = arrayFecha[2] +'-'+ arrayFecha[1]+'-'+arrayFecha[0]
           console.log(ddmmyy)
           try {
               this.mostrarLoading({titulo: 'Accedediendo a la informacion', color: 'secondary'})

            await axios.get(`https://mindicador.cl/api/dolar/${ddmmyy}`)
            .then(Response => {console.log(Response)
            if (Response.data.serie.length > 0 ) {
               this.datos = Response.data.serie[0].valor
            } else {
                this.datos = 'sin resultados'
            }
            
             

            }).catch( e=> console.log(e))
           } catch (error) {
               console.log(error)
           }
           finally{
               this.ocultarLoading()
           }       
            
       }
   },
   created(){
       this.getdolar(this.fecha)
   },
   components:{
    
   }
}
</script>