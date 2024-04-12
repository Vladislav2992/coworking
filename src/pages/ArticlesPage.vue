<script setup>
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Booking from "@/components/Booking.vue";
import Pagination from "@/components/Pagination.vue";
import ArticleOnPage from '@/components/Articles/ArticleOnPage.vue'

const articles = [
    {
        src: '/articles/1.png',
        title: 'BLOKS открывает в Самаре деловое пространство',
        categorie: 'Коворкинги'
    },
    {
        src: '/articles/2.png',
        title: 'Новый рейтинг российских лендлордов «Короли российской недвижимости-2024»',
        categorie: 'Бизнес'
    },
    {
        src: '/articles/3.png',
        title: 'Новый рейтинг российских лендлордов «Короли российской недвижимости-2024»',
        categorie: 'Коворкинги'
    },
    {
        src: '/articles/4.png',
        title: 'Новый рейтинг российских лендлордов «Короли российской недвижимости-2024»',
        categorie: 'Бизнес'
    },
    {
        src: '/articles/5.png',
        title: 'Новый рейтинг российских лендлордов «Короли российской недвижимости-2024»',
        categorie: 'Мероприятия'
    },
    {
        src: '/articles/6.png',
        title: 'Новый рейтинг российских лендлордов «Короли российской недвижимости-2024»',
        categorie: 'Бизнес'
    },
    {
        src: '/articles/7.png',
        title: 'Новый рейтинг российских лендлордов «Короли российской недвижимости-2024»',
        categorie: 'Коворкинги'
    },
    {
        src: '/articles/8.png',
        title: 'Новый рейтинг российских лендлордов «Короли российской недвижимости-2024»',
        categorie: 'Мероприятия'
    },
    {
        src: '/articles/9.png',
        title: 'Новый рейтинг российских лендлордов «Короли российской недвижимости-2024»',
        categorie: 'Коворкинги'
    },
]
</script>
<template>
    <Breadcrumbs />
    <section class="articles">
        <div class="container">
            <h2 class="page__title">Статьи</h2>
            <div class="articles__buttons">
              <button class="articles-tab active">Все</button>
              <button class="articles-tab">Коворкинги</button>
              <button class="articles-tab">Бизнес</button>
              <button class="articles-tab">Мероприятия</button>
            </div>
            <div class="articles__wrapper">
                <ArticleOnPage v-for="(article, index) in articles" 
                :key="index" 
                :src="article.src" 
                :title="article.title"
                :categorie="article.categorie"/>
            </div>
            <Booking />
            <Pagination />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.articles {
    margin: 50px 0;
}

.page__title {
    margin-bottom: clamp(14px, 3vw, 25px);
}

.articles__buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.articles-tab {
  padding: 10px 30px;
  border: none;
  border-radius: 18px;
  font-size: clamp(14px, 3vw, 16px);
  background-color: #eff5fb;
  color: var(--main-text);
  width: fit-content;
  margin-bottom: 5px;
  transition: 0.2s;

  &.active {
    background-color: var(--main-text);
    color: var(--white);
  }

  &:hover {
    color: var(--main-blue);
  }
}
.articles__wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px 20px;
    margin-bottom: 50px;
}

@media(max-width:900px) {
    .articles__wrapper {
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
}
@media(max-width:600px) {
    .articles__wrapper {
        grid-template-columns: 1fr;
    }
    .articles__buttons {
        margin-bottom: 20px;
    }

    .articles-tab {
        width: 47%;
        padding: 6px;
        margin-bottom: 0;

        &:nth-child(1) {
            width: 35%;
        }
        &:nth-child(2) {
            width: 60%;
        }
    }
    
}
</style>