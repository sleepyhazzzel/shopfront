<template lang="pug">
//- 手機版側欄
VNavigationDrawer(v-model="drawer" temporary location="right" v-if="isMobile")
  VList(nav)
    template(v-for="item in navItems" :key="item.to")
      VListItem(:to="item.to" v-if="item.show")
        template(#prepend)
          VIcon(:icon="item.icon")
        template(#append)
          VBadge(color="error" :content="user.cart" v-if="item.to === '/cart'" inline)
        VListItemTitle {{ item.text }}
    VListItem(v-if="user.isLogin" @click="logout")
      template(#prepend)
        VIcon(icon="mdi-logout")
      VListItemTitle 登出
//- 導覽列
VAppBar(color="primary")
  VContainer.d-flex.align-center
    VBtn(to="/" :active="false")
      VAppBarTitle 購物網
    VSpacer
    //- 手機版導覽列
    template(v-if="isMobile")
      VAppBarNavIcon(@click="drawer = true")
    //- 電腦版導覽列
    template(v-else)
      template(v-for="item in navItems" :key="item.to")
        VBtn(:to="item.to" :prepend-icon="item.icon" v-if="item.show") {{ item.text }}
          VBadge(color="error" :content="user.cart" v-if="item.to === '/cart'" floating)
      VBtn(prepend-icon="mdi-logout" v-if="user.isLogin" @click="logout") 登出
//- 頁面內容
VMain
  RouterView(:key="$route.path")
</template>

<script setup>
import { useDisplay } from 'vuetify'
import { ref, computed } from 'vue'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

import { useUserStore } from '@/store/user'
import { useApi } from '@/composables/axios'

const user = useUserStore()
const { apiAuth } = useApi()
const createSnackbar = useSnackbar()
const router = useRouter()

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)

// mobile
const drawer = ref(false)
// 導覽列
const navItems = computed(() => {
  return [
    { to: '/register', text: '註冊', show: !user.isLogin, icon: 'mdi-account-plus' },
    { to: '/login', text: '登入', show: !user.isLogin, icon: 'mdi-login' },
    { to: '/cart', text: '購物車', show: user.isLogin, icon: 'mdi-cart' },
    { to: '/orders', text: '訂單', show: user.isLogin, icon: 'mdi-list-box' },
    { to: '/admin', text: '管理', show: user.isLogin && user.isAdmin, icon: 'mdi-cog' }
  ]
})

const logout = async () => {
  try {
    await apiAuth.delete('/users/logout')
    user.logout()
    createSnackbar({
      text: '登出成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'success',
        location: 'bottom'
      }
    })
    router.push('/')
  } catch (error) {
    const text = error?.responce?.data?.message || '發生錯誤，請稍後再試'
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'warning',
        location: 'bottom'
      }
    })
  }
}
</script>
