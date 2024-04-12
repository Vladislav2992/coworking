<script setup>
import { ref } from 'vue';
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import AdSlider from "@/components/Advertising/AdSlider.vue";

const isEvent = ref(true)

</script>
<template>
    <Breadcrumbs />
    <section class="article event">
        <div class="container">
            <div class="page__container">
                <div class="page__content">
                    <div class="article__main-img" style="background-image: url('/beauty-coworking.jpg');"></div>
                    <div class="article__info">
                        <div class="categorie">Бизнес</div>
                        <div class="article__time" v-if="isEvent = false">
                            <div class="time"></div>
                            <div class="date"></div>
                        </div>                        
                    </div>

                    <div class="article__title">
                        <h1 class="page__title">Бьюти Коворкинг Iris</h1>
                        
                        <div class="event__info" v-if="isEvent = true" > 
                            <div class="event__date-info">
                                <h3 class="event__date">28 Марта</h3>
                                <span class="event__time">10:00 - 15:00</span>
                            </div>
                            <div class="event__details">
                                <div><span>Цена: </span> 9 600 ₽/месяц</div>
                                <div><span>Организатор: </span> Beauty Coworking</div>
                                <div><span>Место проведения: </span> House</div>
                                <span class="event__address">3-й Нижнелихоборский проезд д.54</span>
                            </div> 
                            <div class="event__buttons">
                                <button class="btn btn_border">Оплатить онлайн</button>
                                <button class="btn btn_blue">Забронировать</button>
                            </div>                       
                        </div>
                    </div>
                        

                    <p>Задумывались ли вы, как пользователи изучают ваш сайт? Будь то главная страница, статья из блога или описание компании. Так вот, запомните, что элементы интерфейса никогда не рассматриваются под микроскопом. Большинство людей быстро просматривают контент: не вчитываются в текст, а пробегаются глазами.</p>
                    <p>В этой статье расскажем о 2-х популярных паттернах движения глаз, знание которых поможет вам лучше доносить мысли до читателей.</p>
                    <h2>Чем поможет знание паттернов?</h2>
                    <p>Паттерны движения глаз дают понять, <a href="#!">как читатели просматривают информацию</a> и на чем концентрируют внимание. Благодаря знанию этих принципов вы сможете расположить призыв к действию (CTA) в нужном месте и составить удобную структуру страниц сайта. Сделать все понятно и по полочкам.</p>
                    <p>Знание работы паттернов также помогает администраторам и контент-менеджерам сайтов. Ведь специалисты смогут эффективно разместить и структурировать данные на проекте. Напомним, что готовые сайты Аспро имеют гибкие настройки дизайна. Поэтому веб-страницы на наших решениях легко адаптировать под нужный паттерн.</p>
                    
                    <div class="resume">
                        <p>В нашем примере читатель смотрит на логотип → видит кнопку регистрации → замечает полезный текст с иконкой → <strong>наблюдает кнопку призыва к действию.</strong></p>
                        <p>Z-паттерн применяется для размещения <strong>важных элементов</strong>. Помогает направить посетителей сайта к CTA или другой цели. Поэтому об этом принципе не стоит забывать при создании лендингов и дизайн-проектов.</p>
                    </div>
                </div>
                <div class="page__ad">
                    <AdSlider />
                    <AdSlider />
                    <AdSlider />
                </div>
            </div>
        </div>
    </section>
</template>

