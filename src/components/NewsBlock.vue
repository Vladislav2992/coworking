<script setup>
    import News from './News.vue';
</script>

<template>
    <section class="news-block">
        <div class="container">
            <h2 class="section__title">
                <router-link to="/articles">Новости и статьи о коворкингах</router-link>
                </h2>
            <div class="news-wrapper">
                <News  />     
                <News />     
                <News photo/>     
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

    .with-photo {
        grid-column: 2/3;
        grid-row: 1/4;
    }

    @media(max-width: 670px) {
        .news-wrapper {
            grid-template-columns: 1fr;
        }
        .with-photo {
        grid-column: auto;
        grid-row: auto;
    } 
    }
</style>