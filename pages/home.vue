<script setup lang="ts">
type headerButton = {
    id: number
    title: string
}
const headerButtons: headerButton[] = [
    {
        id: 1,
        title: 'For You',
    },
    {
        id: 2,
        title: 'Following',
    },
]
const currentHeaderButtonIdActive = ref<number>(1)
const handleHeaderButtonClick = function (headerButton: headerButton) {
    currentHeaderButtonIdActive.value = headerButton.id
}
</script>
<template>
    <div class="">
        <!-- Title -->
        <div class="px-4 cursor-pointer flex h-[53px] items-center">
            <h2 class="dark:text-white font-bold text-xl p-0.5">Home</h2>
        </div>
        <!-- For you and Following button-->
        <div class="flex cursor-pointer border-b border-dark-300">
            <HomeHeaderButton
                v-for="headerButton in headerButtons"
                @click="handleHeaderButtonClick(headerButton)"
                :active="currentHeaderButtonIdActive === headerButton.id"
                :title="headerButton.title"
            />
        </div>
    </div>
</template>
