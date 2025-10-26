<template>
    <div v-for="p in proj" :key="p['id']">
        <Projects :title="p['title']" :image="p['image']" :description="p['description']" :link="p['link']"
            :id="p['id']" />
    </div>


</template>

<script setup>
import Projects from '@/components/Projects.vue';
import proj from './../../data/projects.json'
</script>