<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

import HeaderDesktop from './HeaderDesktop.vue';
import HeaderMobile from './HeaderMobile.vue';

const isDesktop = ref(window.innerWidth > 850);

const handleResize = () => {
    isDesktop.value = window.innerWidth > 850;
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<template>
    
    <header v-if="isDesktop">
      <HeaderDesktop />
    </header>
    <header v-else>
      <HeaderMobile />
    </header>
    
</template>

