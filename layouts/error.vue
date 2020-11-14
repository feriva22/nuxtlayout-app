<template>
    <div class="container">
        <h1 v-if="error.statusCode === 404">Page Not Found</h1>
        <h1 v-else-if="error.statusCode === 403">Unauthorized</h1>
        <h1 v-else>An error occured</h1>
        <NuxtLink to="/">Back to Home</NuxtLink>
    </div>
</template>
<script>
export default {
    props: ['error'],
    //layout: 'blog' //you can set a custom layout for the error page
}
</script>