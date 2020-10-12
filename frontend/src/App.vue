<template>
  <v-app class="nav">
    <v-app-bar
            app
            color="yellow"
            dark
    >
      <div class="d-flex align-center">
        <v-img
                alt="Rate Team"
                class="shrink mr-2"
                contain
                src="@/assets/logoRate.png"
                transition="scale-transition"
                width="40"
        />

        <div style="color:orange" class="shrink mt-1 hidden-sm-and-down"
        >Rate Team </div>
      </div>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <component :is="views"></component>
      </v-container>
    </v-main>

    <v-footer app>
      <div>footer</div>
    </v-footer>
  </v-app>
</template>

<script>

  import Login from "./view/Login/Login";
export default {
  name: 'App',
  computed:{
    views(){
      return 'login'
    }
  },

  components: {
    login: Login
  },
};
</script>
