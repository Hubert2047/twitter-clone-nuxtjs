<script lang="ts" setup>
const darkMode = useDarkMode()
</script>
<template>
    <div :class="{ dark: darkMode }">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
