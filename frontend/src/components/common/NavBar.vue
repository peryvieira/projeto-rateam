<template>
  <v-app>
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

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      
    </v-main>
  </v-app>
</template>

<script>
export default {
name:'NavBar'
}
</script>

<style>

</style>