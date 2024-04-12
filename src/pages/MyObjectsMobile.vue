<script setup>
import MyObject from '@/components/Profile/MyObjects.vue'

</script>
<template>
    <main>
        <section class="container">
            <h1 class="page__title">Мои объекты</h1>
            <MyObject />    
        </section>
    </main>
</template>
<style lang="scss" scoped>
.page__title {
    margin-bottom: 15px;
}
.container {
    margin-bottom: clamp(60px, 12vw, 100px);
}
</style>