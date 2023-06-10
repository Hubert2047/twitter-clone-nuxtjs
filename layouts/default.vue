<script setup>
const { twitterBorderColor } = useTailwindConfig()
</script>

<template>
    <div>
        <div class="bg-white dark:bg-dim-900">
            <div class="min-h-full">
                <div class="grid grid-cols-12 mx-auto md:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
                    <!-- Left side -->
                    <div class="col-span-2 px-2 md:px-0 md:col-span-1 lg:col-span-2">
                        <div class="sticky top-0">
                            <SidebarLeft />
                        </div>
                    </div>
                    <!-- Main content -->
                    <main
                        class="border-x border-y-0 border-dark-300 col-span-10 md:col-span-8 lg:col-span-6 dark:bg-dim-900"
                    >
                        <slot></slot>
                    </main>
                    <!-- Right side -->
                    <div class="hidden lg:block col-span-3 lg:col-span-4">
                        <SidebarRight />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
