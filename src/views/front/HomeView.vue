<template lang="pug">
VContainer
  VRow
    VCol(cols="12")
      h1 購物網
    VDivider
    VCol(cols="6" md="4" lg="3" v-for="product in products" :key="product._id")
      ProductCard(v-bind="product")
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import ProductCard from '@/components/ProductCard.vue'
import gsap from 'gsap'

const { api } = useApi()
const createSnackbar = useSnackbar()

const products = ref([])

onMounted(async () => {
  try {
    const { data } = await api.get('/products', {
      params: {
        itemsPerPage: -1
      }
    })
    products.value.push(...data.result.data)
    await nextTick()
    gsap.fromTo('.product-card', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 })
  } catch (error) {
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
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
})
</script>
