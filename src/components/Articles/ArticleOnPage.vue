<script setup>
defineProps({
    src: String,
    title: String,
    categorie: String,
})
</script>

<template>
    <div class="article-on-page">
        <router-link to="/article">
            <img :src="src" alt="">
        </router-link>

        <div class="article__time">
            <p class="date">20 февраля 2024</p>
            <p class="time">5 мин</p>
        </div>
        
        <h2 class="title"> <router-link to="/article"> {{ title }} </router-link></h2>
        
        <p class="categorie">{{ categorie }}</p>
    </div>
</template>

<style lang="scss" scoped>
    .article-on-page {
        padding: 0 15px 20px 15px;
        border: 1px solid var(--border);
        border-radius: 6px;
        overflow: hidden;
        display: flex;
        flex-direction: column;  
        transition: box-shadow .3s;
        
        &:hover {
            box-shadow: 0 1px 2px rgba(0, 0, 0, .16);
        }
    }
    img {
        transform: scale(1.11);
        display: block;
        margin-bottom: 11px;
    }
    .article__time {
        color: var(--gray-text);
        font-size: 13px;
        display: flex;
        justify-content: space-between;
        margin: 20px 0 10px;
    }
    .time {
        position: relative;
        padding-left: 20px;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            background: url('../../assets/images/watch-gray.svg') no-repeat;
            width: 15px;
            height: 15px;
        }
    }

    .title {
        font-size: clamp(16px, 4vw, 20px);
        color: var(--main-text);
        font-weight: 500;
        margin-bottom: 10px;
        line-height: 145%;
        cursor: pointer;
    }
    .categorie {
        font-size: 13px;
        color: var(--gray-text);
        margin-top: auto;
    }

    @media(max-width:600px) {
        .article-on-page {
            padding: 0 12px 20px 12px;
        }
        .article__time {
            margin: 11px 0 8px;
        }
    }
</style>