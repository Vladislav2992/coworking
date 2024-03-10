<template>
    <div class="breadcrumbs">
        <div class="container">
            <router-link to="/">Главная</router-link> > <router-link to="/catalog">Каталог</router-link> > <span>Все коворкинги Москвы</span> 
        </div>
    </div>
</template>

<style lang="scss">
    .breadcrumbs {
        a {
            font-size: clamp(10px, 4vw, 12px);

            &:last-child {
                color: var(--gray-text);
            }
        }
    } 
</style>