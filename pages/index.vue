<script setup>
definePageMeta({
    layout: 'login',
})
const { defaultTransition } = useTailwindConfig()
</script>
<template>
    <div class="p-4 min-h-screen mx-auto max-w-[600px]">
        <div class="p-5 flex flex-col">
            <!-- logo icon -->
            <div class="h-12 w-12">
                <LogoTwitter />
            </div>
            <div class="my-12">
                <span class="dark:text-white text-6xl">正發生</span>
            </div>
            <div class="mb-8">
                <span class="dark:text-white text-3xl"
                    >現在就加入 Twitter。</span
                >
            </div>
            <!-- 建立帳戶 -->
            <div>
                <div class="flex flex-col">
                    <div class="mb-2">
                        <div
                            :class="defaultTransition"
                            class="flex items-center justify-center rounded-full dark:bg-dim-500 w-[300px] h-[40px] cursor-pointer dark:text-white dark:hover:bg-dim-500/90"
                        >
                            建立帳戶
                        </div>
                    </div>
                    <div class="dark:text-dark-text-100 text-xs mb-5">
                        如果註冊，即表示你同意服務條款和隱私政策，包括 Cookie
                        使用政策。
                    </div>
                </div>
                <div></div>
            </div>
            <!-- 已經有帳戶了嗎 -->
            <div class="flex flex-col mt-10">
                <div class="dark:text-white mb-5">已經有帳戶了嗎？</div>
                <div class="mb-2">
                    <div
                        :class="defaultTransition"
                        class="flex items-center justify-center rounded-full dark:border dark:border-dark-300 dark:bg-opacity-0 w-[300px] h-[40px] cursor-pointer dark:text-dim-500 dark:hover:bg-dim-50/10"
                    >
                        登入
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
