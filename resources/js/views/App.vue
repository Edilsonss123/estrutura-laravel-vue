<template>
    <v-app>
        <v-content>
            <v-container>
                <router-link tag="li" to="/">Home</router-link>
                <router-link tag="li" to="/about">About</router-link>
                <router-link tag="li" to="/teste">Teste</router-link>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>
<script>
export default {
   data: () => ({
    drawer: null,
  }),
}
</script>