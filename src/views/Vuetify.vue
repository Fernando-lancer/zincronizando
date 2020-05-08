<template>
    <v-container>
        <v-layout wrap>
            <v-flex class="primary" xs12>
                <h1>12</h1>
            </v-flex>
            <v-flex class="secondary" xs6>
                <h1>6</h1>
            </v-flex>
            <v-flex class="info" xs6>
                <h1>6</h1>
            </v-flex>
        </v-layout>
        <v-layout mt-2 justify-center>
            <v-flex class="warning" xs6> 
                centrado
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Vuetify'
}
</script>