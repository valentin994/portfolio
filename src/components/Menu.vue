<script lang="ts">
import { defineComponent } from 'vue'
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
    <div class="m-auto">
      <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
        <input type="checkbox" value="" @click="$emit('toggleDarkMode')" id="default-toggle" class="sr-only peer">
        <div class="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
    </div>
    <ul class="flex flex-row-reverse p-4 justify-between border-black dark:text-white" >
      <li class="pl-2">Github</li>
      <li class="pl-2">LinkedIn</li>
      <li class="pl-2">About me</li>
      <li class="pl-2">Skills</li>
      <li class="pl-2">Contact</li>
    </ul>
  </div>
</template>