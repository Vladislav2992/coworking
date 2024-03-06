<script setup>
import FittingVariant from './FittingVariant.vue';
</script>
<template>
    <section class="fitting-variants">
        <div class="container">
            <h2 class="section__title">Выберите подходящий вариант</h2>
            <div class="wrapper">
                <FittingVariant title="Все коворкинги Москвы" imageUrl="fitting-variant-1.jpg"/>
                <FittingVariant title="Коворкинги по станции метро" imageUrl="fitting-variant-2.jpg"/>
                <FittingVariant title="Коворкинги Москвы на карте" imageUrl="fitting-variant-3.jpg"/>
                <FittingVariant title="Коворкинги рядом с вами" imageUrl="fitting-variant-4.jpg"/>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .wrapper {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }
    
    @media(max-width:950px) {
        .fitting-variants .container {
            padding: 0 20px;
        }
        .wrapper {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
        }
    }

    @media(max-width:600px) {
        .wrapper {
            grid-template-columns:1fr;
        }
    }
</style>
