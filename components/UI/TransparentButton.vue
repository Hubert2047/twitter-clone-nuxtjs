<script setup lang="ts">
const { defaultTransition } = useTailwindConfig()
</script>
<template>
    <div
        :class="defaultTransition"
        class="flex items-center justify-center rounded-full dark:border dark:border-dark-300 dark:bg-opacity-0 w-[300px] h-[40px] cursor-pointer dark:text-dim-500 dark:hover:bg-dim-50/10"
    >
        <slot></slot>
    </div>
</template>
