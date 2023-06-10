<script setup>
const { defaultTransition } = useTailwindConfig()
const props = defineProps({
    title: { type: String, required: true },
    active: {
        type: Boolean,
        default: false,
    },
})
const divActiveClasses = computed(() => (props.active ? 'dark:bg-dim-500' : ''))
const titleActiveClasses = computed(() => (props.active ? 'dark:text-white' : 'dark:text-dark-text-100'))
</script>
<template>
    <div class="px-4 flex justify-center flex-1 dark:hover:bg-white/20" :class="defaultTransition">
        <div class="flex flex-col">
            <span class="py-3 font-semibold" :class="titleActiveClasses">{{ props.title }}</span>
            <div class="h-1 rounded-md" :class="divActiveClasses"></div>
        </div>
    </div>
</template>
