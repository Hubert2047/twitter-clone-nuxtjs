<script setup>
const { twitterBorderColor, defaultTransition } = useTailwindConfig()
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
})
</script>
<template>
    <div class="m-2 rounded-2xl bg-white-50 dark:bg-dim-700 overflow-hidden">
        <h1 class="p-3 text-xl font-extrabold text-gray-900 dark:text-white">{{ props.title }}</h1>
        <slot></slot>
        <div
            class="p-3 text-blue-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300"
            :class="defaultTransition"
        >
            Show more
        </div>
    </div>
</template>
