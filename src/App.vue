

<template>
  <div class="antialiased h-screen bg-vuewindi-bg  text-vuewindi-text">
    <nav class="flex sticky top-0 z-40 flex-none py-3 mx-auto w-full border-b border-vuewindi-bc bg-vuewindi-bg">
      <div class="flex justify-between items-center px-3 mx-auto w-full max-w-7xl lg:px-4 ">
        <div class="flex">
          <svg viewBox="0.587 0.608 126.313 123.526" class="h-7 mr-3 fill-primary-600"
            xmlns="http://www.w3.org/2000/svg">
            <rect class="" x="0.587" y="0.608" width="96.933" height="93.502" rx="10" ry="10"></rect>
            <rect x="29.967" y="30.632" width="96.933" height="93.502" rx="10" ry="10"
              style="fill: #213142; fill-rule: nonzero; paint-order: fill"></rect>
          </svg>
          <span class="self-center text-lg  font-semibold whitespace-nowrap">VueWindi</span>
        </div>
        <div class="flex">

          <WButton size="sm"> <svg class="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01">
              </path>
            </svg> </WButton>

          <button @click="dark = !dark" class="fill-vuewindi-text">
            <svg v-if="!dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 ">
              <path
                d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z">
              </path>
              <path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path>
              <path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path>
              <path
                d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z">
              </path>
              <path
                d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z">
              </path>
              <path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path>
              <path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
              <path
                d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z">
              </path>
              <path
                d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z">
              </path>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6">
              <path
                d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z">
              </path>
            </svg>

          </button>
        </div>


      </div>
    </nav>
    <div class="container max-w-6xl m-auto mt-10 p-4 md:p-0">
      <div class="">
        <h2 class="font-semibold text-xl mb-4">Button component</h2>
        <div class="flex flex-wrap gap-3">
          <WButton>Primary </WButton>

          <WButton loading> Button </WButton>
          <WButton pills> Button </WButton>
          <WButton disabled> Disabled* </WButton>
          <WButton><svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
              </path>
            </svg> Buy now</WButton>

        </div>
        <h2 class="font-semibold text-xl mt-10 mb-4">Outline</h2>
        <div class="flex flex-wrap gap-3 mt-8">
          <WButton color="primary" variant="outline" >Primary </WButton>
          <WButton color="secondary" variant="outline">Secondary </WButton>
          <WButton color="success" variant="outline">Success </WButton>
          <WButton color="danger" variant="outline">Danger </WButton>
          <WButton color="warning" variant="outline">Warning </WButton>
        </div>

           <h2 class="font-semibold text-xl mt-10 mb-4">Transparent</h2>
        <div class="flex flex-wrap gap-3 mt-8">
          <WButton variant="transparent" >Primary </WButton>
          <WButton color="secondary" variant="transparent">Secondary </WButton>
          <WButton color="success" variant="transparent">Success </WButton>
          <WButton color="danger" variant="transparent">Danger </WButton>
          <WButton color="warning" variant="transparent">Warning </WButton>
          
        </div>

        <h2 class="font-semibold text-xl mt-10 mb-4">Variants</h2>
        <div class="flex flex-wrap gap-3 mt-8">          
          <WButton color="primary">Primary </WButton>
          <WButton color="secondary">Secondary </WButton>
          <WButton color="success">Success </WButton>
          <WButton color="danger">Danger </WButton>
          <WButton color="warning">Warning </WButton>
          
          
        </div>



      </div>
    </div>

    <div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {  ref, watch } from "vue"
import { WButton } from "./index"
const dark = ref(false);
// watch dark mode ref
watch(dark, () => {
  if (dark.value) {
    document.documentElement.classList.remove('light')
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
  }
})


</script>
<script lang="ts">
export default {
  name: "App",

}
</script>
