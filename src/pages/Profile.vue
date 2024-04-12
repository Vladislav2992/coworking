<script setup>
import { ref } from "vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Tabs from "@/components/Profile/Tabs.vue";

const tabs = [
  { name: "settings", label: "Настройка" },
  { name: "notifications", label: "Уведомления", notification : true },
  { name: "orders", label: "Мои заказы" },
  { name: "objects", label: "Мои объекты" },
];

const selected = ref("settings");
const changeTab = (tabName) => {
  selected.value = tabName;
};
</script>
<template>
  <Breadcrumbs />
  <section class="profile">
    <div class="container">
      <h1 class="page__title">Мой профиль</h1>
      <Tabs :names="tabs" :selected="selected" @change-tab="changeTab" />
    </div>
  </section>
</template>

<style lang="scss">
.profile {
  .page__title {
    margin-bottom: 25px;
  }
}

@media (max-width: 850px) {
    .profile {
    .page__title {
      margin-bottom: 15px;
    }
  }
}
</style>
