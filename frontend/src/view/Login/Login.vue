<template>
    <v-layout>
        <v-col offset="3" align-self="center">
            <v-card class="pa-3" max-width="500px">
                <v-card-title>Login</v-card-title>
                <v-text-field label="usuario" dense outlined></v-text-field>
                <v-text-field label="senha" dense type="password" outlined></v-text-field>
                <v-card-actions class="justify-center">

                    <v-btn>Cadastrar</v-btn>
                    <v-btn>Entrar</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-layout>
</template>

<script>
export default {
    name:'Login',
    components:{
    }
}
</script>

<style>
</style>