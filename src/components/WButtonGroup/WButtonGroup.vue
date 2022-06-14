<script lang="ts">
import { defineComponent } from 'vue'
import './button-group.css'
export default defineComponent({
  name: 'WButtonGroup',

})
</script>

<template>
  <div class="w-btn-group">
    <slot />
  </div>
</template>
