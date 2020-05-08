<template>
    <v-layout mt-5 justify-center>
        <v-flex sm12>
            <v-btn pa-2>texto</v-btn >
            
            <v-btn class="info">texto</v-btn>
            <v-btn dark class="blue">texto</v-btn>
            <v-btn dark class="red" text >sin fondo</v-btn>
            <v-btn dark class="primary" large>largo</v-btn>
            <v-btn dark class="primary" small>corto</v-btn>

            <v-btn  class="primary" large disabled >hola</v-btn>
            <v-btn>
                <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn color="primary" icon fab >
                <v-icon>forum</v-icon>
            </v-btn>
            <v-btn color="primary" icon small >
                <v-icon>forum</v-icon>
            </v-btn>
            <v-btn color="primary" icon  large >
                <v-icon>forum</v-icon>
            </v-btn>
        </v-flex>
    </v-layout>
</template>
<script>
export default {
    name:'Botones'
}
</script>