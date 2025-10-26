<template>
    <div class="project" :style="id % 2 === 0 ? 'flex-flow: row;' : 'flex-flow: row-reverse;'">
        <img :src="image" alt="">
        <div class="project-content">
            <h1>{{ title }}</h1>
            <div v-html="description"></div>
            <button>En savoir plus</button>
        </div>
    </div>
    <div style="width:50vw; height: 0px; margin-left: auto; margin-right: auto; 
    border: solid #8d865b; border-radius: 32%;"></div>

</template>

<script setup>
const props = defineProps({
    title: String,
    image: String,
    link: String,
    description: String,
    id: Number
})

</script>