<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/"> Accueil</RouterLink>
      </li>
      <li>
        <RouterLink to="/projets"> Derniers Projets</RouterLink>
      </li>
    </ul>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
