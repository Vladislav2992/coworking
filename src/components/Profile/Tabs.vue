<script setup>
import AboutMe from "./AboutMe.vue";
import Notification from "./Notifications.vue";
import MyOrders from "./MyOrders.vue";
import MyObject from "./MyObjects.vue";
const props = defineProps({
  names: Array,
  selected: String,
});

const emit = defineEmits(["changeTab"]);
const clickOnTab = (tabName) => {
  emit("changeTab", tabName);
};
</script>

<template>
  <div class="profile__inner">
    <div class="">
      <div class="profile__nav-buttons">
        <button
          v-for="tab in names"
          :key="tab.label"
          :class="{ 'profile__nav-btn': true, active: tab.name === selected }"
          :data-notification="tab.notification"
          @click="clickOnTab(tab.name)"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>
    <div class="profile__content">
      <div v-if="selected === 'settings'">
        <AboutMe />
      </div>
      <div v-if="selected === 'notifications'">
        <Notification />
      </div>
      <div v-if="selected === 'orders'">
        <MyOrders />
      </div>
      <div v-if="selected === 'objects'">
        <MyObject />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile__inner {
  display: grid;
  grid-template-columns: 180px auto;
  gap: 20px;
}

.profile__nav-buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 33px;
  padding: 35px 30px;
  border: 1px solid var(--border);
  border-radius: 8px;
  position: sticky;
  top: 135px;
  background-color: var(--white);
}

.profile__nav-btn {
  font-size: 16px;
  color: var(--main-text);
  border: none;
  background-color: transparent;
  padding: 0;
  text-align: left;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: -30px;
    top: -10px;
    width: 8px;
    height: 39px;
    border-radius: 5px;
    background: linear-gradient(90deg, #1624ec, #777fed);
    transition: transform 0.3s;
    transform: scale(0);
  }

  &.active:before {
    transform: scale(1);
  }

  &[data-notification]::after {
      content: '3';
      padding-top: 2px;
      position: absolute;
      right: -7px;
      bottom: 0;
      display: block;
      font-size: 10px;
      color: var(--white);
      background-color: #d42525;
      border-radius: 4px;
      height: 18px;
      width: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
}


@media(max-width: 850px) {
  .profile__inner {
    grid-template-columns: 1fr;
  }

  .profile__nav-buttons {
    display: none;
  }  
}
</style>
