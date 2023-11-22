<template>
  <div>
      <micro-button />
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const MicroButton = defineAsyncComponent(() => import('microBlock/Button'));
console.log(MicroButton);

</script>