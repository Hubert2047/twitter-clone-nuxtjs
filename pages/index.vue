<script setup lang="ts">
definePageMeta({
    layout: 'login',
})
const { login } = useAuth()
const data = reactive({ userName: '', password: '', isShowModal: false, isLoading: false })
async function handleLogin() {
    try {
        data.isLoading = true
        await login(data.userName, data.password)
        navigateTo('home')
    } catch (error) {
    } finally {
        data.isLoading = false
    }
}
function handleCloseModal() {
    data.isShowModal = false
}
function handleShowLogin() {
    data.isShowModal = true
}
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
                <span class="dark:text-white text-3xl">現在就加入 Twitter。</span>
            </div>
            <!-- 建立帳戶 -->
            <div>
                <div class="flex flex-col">
                    <div class="mb-2">
                        <UIPrimaryButton>建立帳戶</UIPrimaryButton>
                    </div>
                    <div class="dark:text-dark-text-100 text-xs mb-5">
                        如果註冊，即表示你同意服務條款和隱私政策，包括 Cookie 使用政策。
                    </div>
                </div>
                <div></div>
            </div>
            <!-- 已經有帳戶了嗎 -->
            <div class="flex flex-col mt-10">
                <div class="dark:text-white mb-5">已經有帳戶了嗎？</div>
                <div class="mb-2">
                    <UITransparentButton @click="handleShowLogin"> 登入 </UITransparentButton>
                </div>
            </div>
        </div>
        <UIModal :show="data.isShowModal" @close-modal="handleCloseModal">
            <template v-slot:header>Login</template>
            <template v-slot:body>
                <div>
                    <div class="w-full mb-4">
                        <UIInput v-model="data.userName" label="User Name" placeholder="@username" />
                    </div>
                    <div class="w-full">
                        <UIInput
                            v-model="data.password"
                            label="Password"
                            placeholder="@password"
                            @keyup.enter="handleLogin"
                            type="password"
                        />
                    </div>
                </div>
            </template>
            <template v-slot:footer>
                <div class="flex justify-center">
                    <UIPrimaryButton @click="handleLogin">登入</UIPrimaryButton>
                </div>
            </template>
        </UIModal>
        <LoadingSpinner :show="data.isLoading" />
    </div>
</template>
