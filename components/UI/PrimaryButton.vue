<script setup lang="ts">
const { defaultTransition } = useTailwindConfig()
</script>
<template>
    <div
        :class="defaultTransition"
        class="flex items-center justify-center rounded-full dark:bg-dim-500 w-[300px] h-[40px] cursor-pointer dark:text-white dark:hover:bg-dim-500/90"
    >
        <slot></slot>
    </div>
</template>
