<script setup>
    import TarifeCard from './TarifeCard.vue';
</script>
<template>
    <section class="tarifes">
        <div class="container">
            <h2 class="section__title">Тарифы коворкингов</h2>
            <div class="tarifes__wrapper">
                <TarifeCard />
                <TarifeCard />
                <TarifeCard />
                <TarifeCard />
                <TarifeCard />
                <TarifeCard />
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .tarifes__wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 20px;
        row-gap: 25px;

        .btn {
            padding: 8px 13px;
        }
    }

    @media(max-width:960px) {
        .tarifes__wrapper {
        grid-template-columns: repeat(2, 1fr);
        }
    }
    @media(max-width:750px) {
        .tarifes__wrapper {
        grid-template-columns: 1fr;
        }
    }
</style>