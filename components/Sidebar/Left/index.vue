<script setup>
import { BookmarkIcon, DocumentTextIcon, HashtagIcon, InboxIcon, UserIcon } from '@heroicons/vue/24/outline'
import { HomeIcon } from '@heroicons/vue/24/solid'
const { defaultTransition } = useTailwindConfig()
const leftTabs = [
    { id: 1, title: 'Home', component: HomeIcon },
    { id: 2, title: 'Explore', component: HashtagIcon },
    { id: 3, title: 'Messages', component: InboxIcon },
    { id: 4, title: 'Booknark', component: BookmarkIcon },
    { id: 5, title: 'Lists', component: DocumentTextIcon },
    { id: 6, title: 'Profile', component: UserIcon },
]
const currentTabActive = ref(1)
</script>
<template>
    <div class="flex flex-col h-screen gap-2">
        <div
            class="p-2 my-2 w-full hover:bg-blue-50 rounded-full sm:w-min dark:hover:bg-white/20"
            :class="defaultTransition"
        >
            <nuxt-link class="flex justify-center" to="/">
                <div class="w-8 h-8">
                    <LogoTwitter />
                </div>
            </nuxt-link>
        </div>
        <SidebarLeftTab v-for="leftTab in leftTabs" :active="currentTabActive === leftTab.id">
            <template v-slot:icon>
                <component :is="leftTab.component" />
            </template>
            <template v-slot:name> {{ leftTab.title }} </template>
        </SidebarLeftTab>
        <div
            class="hidden my-1 lg:flex items-center justify-center cursor-pointer dark:hover:bg-dim-100 dark:bg-dim-500 px-8 min-h-[52px] rounded-full"
        >
            <span class="dark:text-white">Tweet</span>
        </div>
    </div>
</template>
