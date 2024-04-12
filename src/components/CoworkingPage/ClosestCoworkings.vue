<script setup>
import ClosestCoworking from './ClosestCoworking.vue' 
</script>
<template>
    <h2 class="section__title closest-coworkings__title">Ближайшие коворкинги</h2>
    <div class="closest-coworkings">
        <ClosestCoworking />
        <ClosestCoworking />
        <ClosestCoworking />
        <ClosestCoworking />
        <ClosestCoworking />
        <ClosestCoworking />
    </div>
</template>

<style lang="scss">
.closest-coworkings {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 26px 20px;
}

@media (max-width: 850px) {
    .closest-coworkings {  
        grid-template-columns: repeat(2, 1fr);
        height: auto;
    }
}
@media (max-width: 600px) {
    .closest-coworkings {  
        grid-template-columns: 1fr;
    }
}
</style>