<script setup>
defineProps({
    isSearchCityOpen: Boolean,
    isSearching: Boolean,
    closeSearchCity: Function,
    searchInput: String
})


</script>

<template>
    <div :class="{ 'header__mobile-location-result': true, active: isSearchCityOpen, }">
      <div class="header__search-header">
        <div class="header__search-wrapper">
          <input type="text" class="location__input" placeholder="Поиск"
            
            @input="searchInput.length > 0 ? (isSearching = true) : (isSearching = false) "/>

          <button class="header__search-btn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.2 1.8C4.21766 1.8 1.8 4.21766 1.8 7.2C1.8 10.1823 4.21766 12.6 7.2 12.6C8.69142 12.6 10.0402 11.9966 11.0184 11.0184C11.9966 10.0402 12.6 8.69142 12.6 7.2C12.6 4.21766 10.1823 1.8 7.2 1.8ZM0 7.2C0 3.22355 3.22355 0 7.2 0C11.1764 0 14.4 3.22355 14.4 7.2C14.4 8.86346 13.835 10.3962 12.8878 11.615L17.7364 16.4636C18.0879 16.8151 18.0879 17.3849 17.7364 17.7364C17.3849 18.0879 16.8151 18.0879 16.4636 17.7364L11.615 12.8878C10.3962 13.835 8.86346 14.4 7.2 14.4C3.22355 14.4 0 11.1764 0 7.2Z"  fill="#273266" />
            </svg>
          </button>
        </div>
        <button class="header__search-cancle" @click="closeSearchCity">
          Отменить
        </button>
      </div>

      <div class="search-cities__wrapper" v-if="isSearching">
        <div class="search-cities">
          <div class="search-city">Санкт-Петербург</div>
          <div class="search-city">Сочи</div>
          <div class="search-city">Самара</div>
          <div class="search-city">Саров</div>
          <div class="search-city">Сарс</div>
          <div class="search-city">Саракташ</div>
          <div class="search-city">Санкт-Петербург</div>
          <div class="search-city">Сочи</div>
          <div class="search-city">Самара</div>
          <div class="search-city">Саров</div>
          <div class="search-city">Сарс</div>
          <div class="search-city">Саракташ</div>
        </div>
      </div>

      <div class="main-cities" v-else>
        <div class="popular-city active">Москва</div>
        <div class="popular-city">Санкт-Петербург</div>
        <div class="popular-city">Краснодар</div>
        <div class="popular-city">Екатеринодар</div>
        <div class="popular-city">Улан-Уде</div>
        <div class="popular-city">Сочи</div>
        <div class="popular-city">Ростов-на-Дону</div>
        <div class="popular-city">Самара</div>
        <div class="popular-city">Казань</div>
      </div>
    </div>
</template>

<style lang="scss">
.header__mobile-location-result {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100dvh;
  z-index: 17;
  background-color: var(--white);
  display: none;

  &.active {
    display: block;
  }

  .header__search-wrapper {
    width: 100%;
  }

  .header__search-cancle {
    display: inline-block;
  }

  .search-cities {
    padding: 0 15px;
    height: 100%;
  }

  .main-cities {
    padding: 0 15px;
  }
}

.header__search-header {
  display: flex;
  gap: 10px;
  padding: 12px 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16);
  margin-bottom: 15px;
}
</style>