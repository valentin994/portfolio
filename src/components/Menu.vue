<script lang="ts">
import { defineComponent } from 'vue'
//TODO Create a button for changing the theme
export default defineComponent({
  props:{
    isDark: Boolean,
  },
  setup(props){
    props.isDark
  },
})
</script>
<template>
  <div class="flex p-4" :class="isDark ? 'dark' : ''">
    <div class="flex-none">
      <img alt="Valentin Vareskic logo" src="../assets/logo_nacrt.png" class="h-auto w-16"/>
    </div>
    <div class="flex-1"></div>
    <button @click="$emit('toggleDarkMode')">Toggle</button>
    <ul class="flex flex-row-reverse p-4 justify-between border-black dark:text-white" >
      <li class="pl-2">Github</li>
      <li class="pl-2">LinkedIn</li>
      <li class="pl-2">About me</li>
      <li class="pl-2">Skills</li>
      <li class="pl-2">Contact</li>
    </ul>
  </div>
</template>