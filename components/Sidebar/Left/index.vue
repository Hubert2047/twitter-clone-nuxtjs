<script setup>
import { BookmarkIcon, DocumentTextIcon, HashtagIcon, InboxIcon, UserIcon } from '@heroicons/vue/24/outline'
import { HomeIcon } from '@heroicons/vue/24/solid'
const { defaultTransition } = useTailwindConfig()
</script>
<template>
    <div class="flex flex-col h-screen gap-2">
        <div class="p-2 my-2 hover:bg-blue-50 rounded-full w-min dark:hover:bg-white/20" :class="defaultTransition">
            <nuxt-link to="/">
                <div class="w-8 h-8">
                    <LogoTwitter />
                </div>
            </nuxt-link>
        </div>
        <SidebarLeftTab active>
            <template v-slot:icon>
                <HomeIcon />
            </template>
            <template v-slot:name> Home </template>
        </SidebarLeftTab>
        <SidebarLeftTab>
            <template v-slot:icon>
                <HashtagIcon />
            </template>
            <template v-slot:name> Explore </template>
        </SidebarLeftTab>
        <SidebarLeftTab>
            <template v-slot:icon>
                <InboxIcon />
            </template>
            <template v-slot:name> Messages </template>
        </SidebarLeftTab>
        <SidebarLeftTab>
            <template v-slot:icon>
                <BookmarkIcon />
            </template>
            <template v-slot:name> Booknark </template>
        </SidebarLeftTab>
        <SidebarLeftTab>
            <template v-slot:icon>
                <DocumentTextIcon />
            </template>
            <template v-slot:name> Lists </template>
        </SidebarLeftTab>
        <SidebarLeftTab>
            <template v-slot:icon>
                <UserIcon />
            </template>
            <template v-slot:name> Profile </template>
        </SidebarLeftTab>
    </div>
</template>
