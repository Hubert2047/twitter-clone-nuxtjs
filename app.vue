<script setup>
const darkMode = ref(true)
const changeTheme = () => {
    darkMode.value = !darkMode.value
}
</script>
<template>
    <div :class="{ dark: darkMode }">
        <div class="bg-white dark:bg-dim-900">
            <div class="min-h-full">
                <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
                    <!-- Left side -->
                    <div class="hidden md:block col-span-1 lg:col-span-2">
                        <div class="sticky top-0">
                            <SidebarLeft />
                        </div>
                    </div>
                    <!-- Main content -->
                    <main class="col-span-12 md:col-span-8 lg:col-span-6 bg-red-500">
                        <button @click="changeTheme">click me</button>
                    </main>
                    <!-- Right side -->
                    <div class="hidden md:block col-span-3 lg:col-span-4">
                        <SidebarRight />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
