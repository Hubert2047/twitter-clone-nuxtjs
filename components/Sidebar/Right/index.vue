<script setup>
const { defaultTransition } = useTailwindConfig()
const trendsForYouItems = ref([
    {
        title: 'Trending in Taiwan',
        content: '#AI美女',
        count: '13.9K',
    },
    {
        title: 'Politics · Trending',
        content: 'Ukraine',
        count: '549K',
    },
    {
        title: 'Travel · Trending',
        content: 'Tesla',
        count: '152K',
    },
    {
        title: 'Politics · Trending',
        content: 'Russian',
        count: '274K',
    },
    {
        title: 'Technology · Trending',
        content: 'iPhone',
        count: '454K',
    },
    {
        title: 'Politics · Trending',
        content: 'Biden',
        count: '1.6M',
    },
])
const whoToFollowItems = ref([
    {
        name: 'Joe biden',
        handle: '@JoeBiden',
        image: 'https://picsum.photos/200/200',
    },
    {
        name: 'Hubert wu',
        handle: '@HubertWu',
        image: 'https://picsum.photos/200/200',
    },
])
</script>
<template>
    <div class="flex flex-col">
        <!-- Trends for you -->
        <SidebarRightPreviewCard title="Trends for you">
            <SidebarRightPreviewCardItem v-for="trend in trendsForYouItems">
                <div class="dark:text-dark-text-100 text-xs">
                    {{ trend.title }}
                </div>
                <div class="dark:text-white mt-0.5 font-bold">
                    {{ trend.content }}
                </div>
                <div class="dark:text-dark-text-100 mt-1 text-xs">
                    {{ trend.count }} Tweets
                </div>
                <div
                    class="w-8 h-8 mr-3 absolute right-0 top-1 flex items-center justify-center rounded-full hover:bg-dark-100 fill-dark-text-100 hover:fill-blue-400"
                    :class="defaultTransition"
                >
                    <div class="w-6 h-6">
                        <IconsThreedot />
                    </div>
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>
        <!-- Who to follows -->
        <SidebarRightPreviewCard title="Who to follows">
            <SidebarRightPreviewCardItem
                v-for="whoToFollowItem in whoToFollowItems"
            >
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-2">
                        <div class="w-8 h-8 rounded-full overflow-hidden">
                            <img :src="whoToFollowItem.image" />
                        </div>
                        <div class="flex flex-col">
                            <span
                                class="dark:text-white font-semibold text-sm"
                                >{{ whoToFollowItem.name }}</span
                            >
                            <span class="dark:text-dark-text-100 text-sm">{{
                                whoToFollowItem.handle
                            }}</span>
                        </div>
                    </div>
                    <div
                        class="flex items-center dark:bg-white px-4 rounded-3xl min-h-[32px] dark:hover:bg-dark-200 font-bold"
                    >
                        <span class="text-sm">Follow</span>
                    </div>
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>
        <!-- suggest login -->
        <!-- <SidebarRightSuggestLoginCard /> -->
    </div>
</template>
