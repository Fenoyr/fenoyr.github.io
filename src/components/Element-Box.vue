<template>
    <div :class="'img-wrapper ' + classId + ' boxed-text'">
        <a :href="link.length === 0 ? '#' : link" :target="link.length === 0 ? '_self' : '_blank'">
            <img :src="image" alt="">
            <h1 v-if="text === ''" v-html="title"></h1>
            <h2 v-else v-html="title"></h2>
            <p v-html="text"></p>
        </a>
    </div>
</template>

<script setup>
const props = defineProps({
    link: String,
    image: String,
    title: String,
    text: String,
    classId: String
})
console.log(props.link.length === 0 ? '_blank' : false)
</script>