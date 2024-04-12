<script setup>
import { ref } from 'vue'
import MyObject from "./MyObject.vue"

const images = [
  '/coworking-1.jpg', 
  '/coworking-2.jpg', 
  '/coworking-3.jpg', 
  '/coworking-4.jpg', 
  '/coworking-5.jpg', 
]

const myObjects = ref([{id:1}])

const removeMyObject = (id) => {
  myObjects.value = myObjects.value.filter(object => object.id !== id)
}
</script>
<template>
  <div class="my-object" v-if="myObjects.length > 0">
    <MyObject 
    v-for="(object, index) in myObjects"
    :key="index"
    :id="index + 1"
    :removeMyObject="removeMyObject"
    :images="images"/>
    <RouterLink to="/editing" class="btn btn_blue">Добавить объект</RouterLink>
  </div>

  <div class="create-object" v-else>  
    <p class="create-object__message">В настоящий момент у вас нет объектов. <br> Хотите добавить новый объект?</p>
    <RouterLink to="/editing" class="btn btn_blue">Добавить объект</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.create-object {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
}

.create-object__message {
  font-size: clamp(16px, 5vw, 24px);
  font-weight: 600;
  line-height: 145%;
}
.my-object > .btn {
  min-width: 247px;
}
@media(max-width: 600px) {
  .my-object .btn {
    width: 100%;
  }
}
</style>
