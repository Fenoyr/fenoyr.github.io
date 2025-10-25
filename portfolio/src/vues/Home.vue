<template>
    <div class="horizontal-scroll-wrapper">
        <div v-for="el in frontpage" :key="el['id']" :class="classbox[el['id']]">
            <ElementBox :link="el['link']" :image="el['image']" :title="el['title']" :text="el['text']" />
        </div>
    </div>
</template>

<script setup>
import ElementBox from '@/components/Element-Box.vue';
import { ref } from 'vue';
import frontpage from "./../../data/frontpage.json"

console.log(frontpage);
const classbox = ref(["slower", "slower1", "lower2", "slower-down", "slowest", "faster", "faster1", "fastest", "vertical", "last"])

</script>
