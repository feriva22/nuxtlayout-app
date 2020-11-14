<template>
    <h1>Page Failed to load axios , and redirect to /sorry when use axios error 500, because intercept on plugins</h1>
</template>

<script>
export default {
  async asyncData({ $axios, params }){
    const response = await $axios.get(`https://httpstat.us/500`)
    return {response}
  }
}
</script>