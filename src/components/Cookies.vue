<script setup>
import { ref } from 'vue'

const isCookiesAcepted = ref(false)
</script>

<template>
    <div :class="['cookies', {'acepted' : isCookiesAcepted}]">
        <div>Мы используем <a href="#!">файлы-cookie</a> для улучшение работы сайта</div>
        <button class="btn btn_gradient" @click="isCookiesAcepted = true">Принять</button>
    </div>
</template>

<style lang="scss" scoped>
    .cookies {
        padding: 15px 20px;
        border: 0.5px solid var(--border);
        border-radius: 6px;
        background-color:var(--white);
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: center;
        box-shadow: 0 1px 2px rgba(0,0,0,.16);
        //position: fixed;
        right: 140px;
        bottom: 39px;
        color: #717171;
        font-size: clamp(12px, 2vw, 15px);
        z-index: 4;
        transform: translateX(0);
        visibility: visible;
        opacity: 1;
        max-height: 74px;  
        transition: transform .3s, .5s; 
        max-width: 557px; 
        width: 100%;    

        &.acepted {
            transform: translateX(120%);
            visibility: hidden;
            opacity: 0;
            max-height: 0; 
            padding: 0;
        }

        div {
            line-height: 145%;
        }
    }

    a {
        text-decoration: underline;        
    }

    @media(max-width:850px) {
        .cookies {
            padding: 19px 12px;
        }
    }
</style>