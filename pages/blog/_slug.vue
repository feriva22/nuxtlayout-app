<template>
    <nuxt-content :document="doc" />
    
</template>

<script>
export default {
    layout: 'blog', //defaine custom layout only for blog page
    layout(context){
        return 'blog'
    },
    async asyncData({ $content, params}){
        const doc = await $content(params.slug || 'index').fetch();
        return { doc }
    }
}
</script>