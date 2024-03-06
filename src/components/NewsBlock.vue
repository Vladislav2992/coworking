<script setup>
    import News from './News.vue';
</script>

<template>
    <section class="news-block">
        <div class="container">
            <h2 class="section__title">Новости и статьи о коворкингах</h2>
            <div class="news-wrapper">
                <News />     
                <News />     
                <News />     
                <News />     
            </div>
        </div>
    </section>
</template>

<style>
    .news-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 40px;
        column-gap: clamp(40px, 6vw, 220px);
    }

    @media(max-width: 670px) {
        .news-wrapper {
            grid-template-columns: 1fr;
        } 
    }
</style>