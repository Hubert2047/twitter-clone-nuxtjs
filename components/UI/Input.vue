<script setup lang="ts">
const emits = defineEmits(['update:modelValue'])
const props = defineProps({
    modelValue: {
        required: true,
    },
    label: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'text',
    },
})
</script>
<template>
    <div>
        <div class="mb-2 text-sm">{{ props.label }}</div>
        <div>
            <input
                :placeholder="props.placeholder"
                class="w-full rounded-md p-2 outline-0 focus:border-2 focus:border-dim-100"
                :type="type"
                :value="props.modelValue"
                @input="(event) => emits('update:modelValue', event.target.value)"
            />
        </div>
    </div>
</template>
