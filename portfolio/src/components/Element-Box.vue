<template>
    <div class="boxed-text img-wrapper">
        <a :href="link.length === 0 ? '#' : link" :target="link.length === 0 ? '_self' : '_blank'">
            <img :src="image" alt="">
            <h2>{{ title }}</h2><br>
            <p>{{ text }}</p>
        </a>
    </div>
</template>

<script setup>
const props = defineProps({
    link: {
        type: String,
        default: "#"
    },
    image: {
        type: String,
        default: "./../images/ditto.jpg"
    },
    title: {
        type: String,
        default: ""
    },
    text: {
        type: String,
        default: ""
    }
})
console.log(props.link.length === 0 ? '_blank' : false)
</script>