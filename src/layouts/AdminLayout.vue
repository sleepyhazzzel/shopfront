<template lang="pug">
VNavigationDrawer(permanent)
  VList
    VListItem(:prepend-avatar="prependAdvatar" :title="user.account")
  VDivider
  VList
    VListItem(v-for="item in navItems" :key="item.to" :to="item.to" :prepend-icon="item.icon" :title="item.text")
VMain
  RouterView
</template>

<script setup>
import { useUserStore } from '@/store/user'
import { computed } from 'vue'

const user = useUserStore()

const navItems = [
  { to: '/admin/products', text: '商品管理', icon: 'mdi-shopping' },
  { to: '/admin/orders', text: '訂單管理', icon: 'mdi-list-box' },
  { to: '/', text: '回首頁', icon: 'mdi-home' }
]

const prependAdvatar = computed(() => {
  return `https://source.boringavatars.com/beam/120/${user.account}?colors=5A5239,190A12,B3C9C1,CEC7B6,EEE9C7`
})
</script>
