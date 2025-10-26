<template>
    <div class="horizontal-scroll-wrapper">
        <div v-for="el in frontpage" :key="el['id']">
            <ElementBox :link="el['link']" :image="el['image']" :title="el['title']" :text="el['text']"
                :classId="classbox[el['id'] - 1]" />
        </div>
    </div>
</template>

<script setup>
import ElementBox from '@/components/Element-Box.vue';
import { ref } from 'vue';
import frontpage from "./../../data/frontpage.json"

console.log(frontpage);
const classbox = ref(["intro", "photo", "category-title", "epitech", "esup", "itemm", "P13", "category-title", "SNCF", "last"])

</script>
