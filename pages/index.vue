<template>
  <main>
    <h1>Hello World {{ halo }}</h1>
    <p>Your state counter {{ counter }}</p>
    <button v-on:click="incrementValue()">Add value</button>
    <NuxtLink to="/fun">Go to Fun Page</NuxtLink><br />
    <NuxtLink to="/todos">Go to Todos List page</NuxtLink>
    <NuxtLink to="/blog">Go to Blog page (@nuxt/content module)</NuxtLink>
    <NuxtLink to="/fail-axios">Test effect plugin</NuxtLink>
  </main>
</template>

<script>
export default {
  data() {
    return {
      halo: "Feri",
    };
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    incrementValue(e) {
      this.$store.commit("increment");
    },
  },
};
</script>

