<script setup>
    import Notification from '@/components/Profile/Notifications.vue'
    import Breadcrumbs from '@/components/Breadcrumbs.vue';
</script>
<template>  
    <Breadcrumbs />
        <section class="container">
            <h1 class="page__title">Уведомления</h1>
            <Notification />    
        </section>    
</template>

<style lang="scss" scoped>
.page__title {
    margin-bottom: 15px;
}
.container {
    margin-bottom: clamp(60px, 12vw, 100px);
}
</style>