<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline'
const emits = defineEmits(['close-modal'])
const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
})
const { defaultTransition } = useAppConfig()
</script>
<template>
    <div
        v-show="props.show"
        class="fixed flex dark:bg-dim-900/30 min-w-[95vw] inset-0 items-center justify-center"
        :class="defaultTransition"
    >
        <div class="flex flex-col dark:bg-dim-700 p-6 rounded-xl">
            <div class="flex mb-4 items-center">
                <div class="fill-white w-6 h-6 mr-4 cursor-pointer" @click="emits('close-modal')">
                    <XMarkIcon />
                </div>
                <div class="text-2xl">
                    <slot name="header"></slot>
                </div>
            </div>
            <div class="mb-4 py-6">
                <slot name="body"></slot>
            </div>
            <div>
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>
