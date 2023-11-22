<template>
    <div>
        <client-only>
            <micro-button />
        </client-only>
    </div>
</template>

<script lang="ts" setup>
const MicroButton = defineAsyncComponent(() => import('microBlock/Button'));
console.log(MicroButton);

</script>