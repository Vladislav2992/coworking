<script setup>
defineProps({
  title: String,
  imageUrl: String,
});
</script>

<template>
  <div class="fitting-variant">
    <img class="image" :src="imageUrl" :alt="title" />
    <h3 class="title">
      <a href="#!">{{ title }}</a>
    </h3>
    <ul>
      <li><a href="#!">Коворкинг F2.CITY</a></li>
      <li><a href="#!">SOK Рыбаков Тауэр</a></li>
      <li><a href="#!">CEO Rooms Крылья</a></li>
      <li><a href="#!">Коворкинг officeless</a></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.fitting-variant {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 8px;
}

.image {
  border-radius: 4px;
  position: relative;
  z-index: 1;
  transform: scale(1.05);
  margin-bottom: 20px;
  width: 100%;
}
.title {
  font-size: 16px;
  font-weight: 500;
  margin: 0 15px;
}
ul {
  margin: 20px 15px;
}

li {
  color: #717171;
  font-size: 14px;
  margin-bottom: 12px;
  transition: color 0.3s;

  &:hover {
    color: var(--main-blue);
  }
}

@media (max-width: 600px) {
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
  }
}
</style>
