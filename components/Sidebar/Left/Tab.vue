<script setup>
const { defaultTransition } = useTailwindConfig()
const props = defineProps({
    active: {
        type: Boolean,
        default: false,
    },
})
const textClasses = computed(() => {
    return props.active ? 'font-bold' : 'font-medium'
})
</script>
<template>
    <nuxt-link
        to="#"
        class="flex items-center p-2 w-min gap-4 hover:bg-gray-200 rounded-full dark:hover:bg-white/20 dark:text-white"
    >
        <div class="w-6 h-6 text-dark" :class="defaultTransition">
            <slot name="icon"></slot>
        </div>
        <div :class="textClasses" class="hidden lg:block">
            <slot name="name"></slot>
        </div>
    </nuxt-link>
</template>
