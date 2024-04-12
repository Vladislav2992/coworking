<script setup>
defineProps({
    name: String
})
</script>

<template>
     <div class="tag">
        <span>{{ name }}</span>
        <div class="tag-description__wrapper">
            <div class="tag-description">
            <h3 class="teg-title">Для чего подойдет</h3>
            <p>В самом центре Самары, на 5-ти этажах бизнес-центра будут размещены: ивент-холл на 400 гостей, гостиница, кафе и бар, гибкий теплый склад и отдельные изолированные кабинеты для комфортной работы 170 сотрудников.</p>
        </div>
        </div>
     </div>
</template>

<style lang="scss">
.tag {
        padding: 7px 27px;
        background-color: var(--border);
        border: 1px solid transparent;
        border-radius: 30px;
        font-size: 14px;
        cursor: pointer;
        transition: .3s;
        position: relative;

        &:hover {
            border-color: var(--main-blue); 
        }

        &:hover .tag-description__wrapper {
            visibility: visible;
            opacity: 1; 
        }
    }

.tag-description__wrapper {
    position: absolute;
    bottom: 120%;
    left: 20%;
    height: fit-content;
    width: 220px;
    font-size: 12px;
    color: var(--gray-text);
    background-color: var(--white);
    border: 1px solid var(--main-blue);
    border-radius: 6px;
    padding: 20px 15px;
    z-index: 2;
    transition: .3s;
    opacity: 0;
    visibility: hidden;
}    
.tag-description {
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -25px;
        left: 0;
        width: 9px;
        height: 9px;
        border: 1px solid var(--main-blue);
        background-color: var(--white);
        border-radius: 50%;
    }
    &::before {
        content: '';
        position: absolute;
        bottom: -20px;
        left: 0;
        width: 9px;
        height: 9px;
        z-index: 2;
        background-color: var(--white);
    }
}    

.teg-title {
    font-size: 14px;
    margin-bottom: 10px;
    color: var(--main-text);
}

@media(max-width:850px) {

    .tag {
        font-size: 12px;
        padding: 7px 14px;
    }

    .tag-description__wrapper {
        display: none;
    }

    .tag:hover .tag-description__wrapper{
        visibility: hidden;
        opacity: 0; 
    }
}
</style>