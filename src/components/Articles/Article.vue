<script setup>
import { ref } from 'vue';
import AdSlider from '../Advertising/AdSlider.vue';
import Breadcrumbs from '../Breadcrumbs.vue';

const event = ref(false)
</script>

<template>
    <Breadcrumbs />
    <article class="article">
        <div class="container">
            <div class="page__container">
                <div class="page__content">
                    <div class="article__main-img" style="background-image: url('/articles/2.png');"></div>
                    <div class="article__info">
                        <div class="categorie">Коворкинги</div>
                        <div class="article__time">
                            <div class="time">5 мин</div>
                            <div class="date">20 февраля 2024</div>
                        </div>
                    </div>
                    <div class="article__title">
                        <h1 class="page__title">Новый рейтинг российских лендлордов «Короли российской недвижимости-2024»</h1>
                        <div class="event__info" v-if="event"> 
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
                    <h2>F-образный паттерн: как читают абзацы?</h2>
                    <p>F-образный паттерн описывает движение глаз пользователей, когда речь идет об абзацах или блоках контента. Этот принцип чтения работает по следующему алгоритму:</p>
                    <ol>
                        <li>Читатель просматривает текст с верхнего левого угла.</li>
                        <li>Глаза двигаются горизонтально в правую сторону.</li>
                        <li>Затем они идут вертикально вниз по левой стороне в поисках интересного контента из первых предложений абзаца. </li>
                        <li>При нахождении полезного текста глаза двигаются во втором горизонтальном направлении.</li>
                    </ol>
                    <p>В самом конце посетители изучают левую <strong>сторону контента по вертикали</strong>.</p>

                    <img src="/articles/article-1.png" alt="">
                    <p>F-образный макет актуален для всех пользователей, кто всю жизнь читает сверху вниз и слева направо.</p>
                    <p>На практике направление глаз далеко не всегда соответствует идеальной F. В некоторых случаях читатели могут зациклиться на большом количестве слов и снова читать в правую сторону. Тогда узор начинает напоминать букву E.</p>
                    
                    <h2>Z-образный паттерн: как читают страницы?</h2>
                    <p>Z-образный паттерн описывает движение глаз не по абзацам текста, а по всей странице сайта. Принцип включает сканирование логотипа, кнопок, картинок и других элементов интерфейса, в том числе и текста.</p>
                    <img src="/articles/article-2.png" alt="">
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
    </article>
</template>

<style lang="scss">
.article {
    p {
        font-size: clamp(15px, 4vw, 16px);
        line-height: 145%;
        color: #3E3E3E;
        margin-bottom: clamp(15px, 4vw, 20px);
    }

    h2 {
        color: var(--main-text);
        font-weight: 500;
        font-size: clamp(20px, 4vw, 28px);
        margin: 47px 0 29px;
    }

    a, strong, b {
        color: var(--main-blue);
        font-weight: 500;
    }
    img {
        margin: 10px 0 30px 0;
    }
    ol, ul {        
        list-style: auto;
        font-size: clamp(15px, 4vw, 16px);
        line-height: 145%;
        margin-left: 20px;
        color: #3E3E3E;
        margin-bottom: 20px;
    }
    li {
        margin-bottom: 10px;
        margin-left: 5px;
    }

    .page__title {
        font-size: clamp(32px, 5vw, 48px); 
        margin-bottom: 25px;       
    }

    .resume {
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 30px 20px;

        p:last-child {
            margin-bottom: 0;
        }
    }
    
    .categorie {
    color: var(--white);
    padding: 2px 10px;
    font-size: 12px;
    border-radius: 15px;
    width: fit-content;
    display: inline-block;
    background: linear-gradient(90deg, #1624EC, #777FED);
}
}
.article__title {
    margin-bottom: clamp(16px, 5vw, 45px);
}

.article__main-img {
    width: 100%;
    height: 270px;
    border-radius: 8px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-bottom: 15px;
}
.article__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.article__time {
    display: flex;
    gap: 20px;
    color: var(--gray-text);
    font-size: 13px;
    
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
}

.event__info {
    display: grid;
    grid-template-columns: 116px auto 190px;
    align-items: center;
    font-size: 16px;
}   
.event__date-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    gap: 23px;
}
.event__date {
    font-size: 20px;
    font-weight: 500;
}
.event__time {
    font-size: 15px;
    color: var(--gray-text);
}
.event__details {
    border-left: 1px solid var(--border);
    padding-left: 20px;
    font-size: 16px;
    color: var(--main-text);

    div {
        margin-bottom: 12px;
    }

    span {
        color: var(--gray-text);
    }
}

.event__address {
    font-size: 12px;
    position: relative;
    padding-left: 17px;
    margin-bottom: 0;

    &::before {
        content: '';
        position: absolute;
        top: 1px;
        left: 0;
        height: 12px;
        width: 10px;
        background: url('../../assets/images/location.svg') no-repeat center;
        background-size: cover;
        
    }
}
.event__buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .btn {
        width: 100%;
    }
}

@media (max-width: 700px) {
    .event__info {
        grid-template-columns: 1fr;
    }
    .event__date-info {
        flex-direction: row;
        justify-content: space-between;
        padding: 15px 0;
        border-top: 1px solid var(--border);
    }

    .event__details {
        border-left: none;
        border-top: 1px solid var(--border);
        padding: 15px 0;
    }
}
@media (max-width: 500px) {
    .resume {
        padding: 20px 10px;
    }
}
</style>