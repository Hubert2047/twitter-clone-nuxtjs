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
        class="flex w-full justify-center items-center p-2 sm:w-min gap-4 hover:bg-gray-200 rounded-full dark:hover:bg-white/20 dark:text-white"
    >
        <div class="w-6 h-6 text-dark" :class="defaultTransition">
            <slot name="icon"></slot>
        </div>
        <div :class="textClasses" class="hidden lg:block text-lg">
            <slot name="name"></slot>
        </div>
    </nuxt-link>
</template>
