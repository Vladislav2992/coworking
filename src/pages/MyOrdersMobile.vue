<script setup>
    import MyOrders from '@/components/Profile/MyOrders.vue'
    import Breadcrumbs from '@/components/Breadcrumbs.vue';
</script>
<template>
    <Breadcrumbs />
    <section class="container">
        <h1 class="page__title">Мои заказы</h1>
        <MyOrders />
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