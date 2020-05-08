<template>
    <v-container grid-list-md >
        <v-layout row wrap >
          <v-flex sm6 x612>
            <v-card>
              <v-img  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"> 
              <v-container fill-height>
                  <v-layout>
                      <v-flex>
                          <span class="headline font-weight-bold">Lorem, ipsum dolor.</span>
                      </v-flex>
                  </v-layout>
              </v-container>
              </v-img>
              <v-card-title>
                <h3>Lorem, ipsum dolor.</h3>
              </v-card-title>
                
              <v-card-text>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi distinctio rem harum eos neque tempore. Quis voluptatum natus dignissimos odio incidunt nulla provident, architecto nam ipsam assumenda nisi similique? Quae.</h4>

              </v-card-text>

              <v-card-actions>
                  <v-btn color="info" text >Accion</v-btn>
              </v-card-actions>

            </v-card>
            
          </v-flex>
          <v-flex sm6 x612>
            <v-card>
              <v-img  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"> </v-img>
              <v-card-title>
                <h3>Lorem, ipsum dolor.</h3>
              </v-card-title>
                
              <v-card-text>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi distinctio rem harum eos neque tempore. Quis voluptatum natus dignissimos odio incidunt nulla provident, architecto nam ipsam assumenda nisi similique? Quae.</h4>

              </v-card-text>

              <v-card-actions>
                  <v-btn color="info" text @click="dialogo = !dialogo">Accion</v-btn>
              </v-card-actions>

            </v-card>
            
          </v-flex>
        </v-layout>
        <!-- dialogo -->
        <v-dialog v-model="dialogo" width="500" persistent>
            <v-card>
                <v-card-title>Titulo</v-card-title>
                <v-card-text>Lorem, ipsum dolor.</v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="red" text @click="dialogo = false">home</v-btn>
                </v-card-actions>
            </v-card>
            
        </v-dialog>
      </v-container>
</template>
<script>
export default {
    name: 'Cards',
    data(){
        return {
            dialogo: false
        }
    }
}
</script>