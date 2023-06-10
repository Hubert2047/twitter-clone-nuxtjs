<script setup>
const darkMode = ref(true)
const changeTheme = () => {
    darkMode.value = !darkMode.value
}
</script>
<template>
    <div :class="{ dark: darkMode }">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
