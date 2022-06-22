<script lang="ts">
import Menu from './components/Menu.vue';

export default ({
  name: "App",
  components:{
    Menu
  },
  methods:{
    toggleDarkMode(){
      this.isDark = !this.isDark;
      localStorage.setItem("darkMode", this.isDark);
    }
  },
  data(){
    let isDark = localStorage.getItem("darkMode") === true
    return {
      isDark,
    }
  }
})
//TODO add main section component

</script>

<template>
  <div :class="isDark ? 'dark' : ''">
  <div class="bg-slate-200 dark:bg-slate-800 h-screen" >
    <Menu :is-dark="isDark" @toggle-dark-mode="toggleDarkMode" />
  </div>
  </div>
</template>

