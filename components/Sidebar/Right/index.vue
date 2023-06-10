<script setup>
const trendsForYou = ref([
    {
        title: 'Trending in Taiwan',
        content: '#AI美女',
        count: '13.9K',
    },
])
</script>
<template>
    <div class="flex flex-col">
        <!-- Trends for you -->
        <SidebarRightPreviewCard title="Trends for you">
            <SidebarRightPreviewCardItem v-for="trend in trendsForYou">
                <div class="dark:text-dark-text-100 text-xs">{{ trend.title }}</div>
                <div class="dark:text-white mt-0.5 font-bold">{{ trend.content }}</div>
                <div class="dark:text-dark-text-100 mt-1 text-xs">{{ trend.count }} Tweets</div>
                <div class="w-6 h-6 absolute right-0 top-1 rounded-full fill-dark-text-100 hover:fill-blue-400">
                    <IconsThreedot />
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>
        <!-- Who to follows -->
        <SidebarRightPreviewCard title="Who to follows" />
    </div>
</template>
