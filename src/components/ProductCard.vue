<template lang="pug">
RouterLink(:to="'/products/' + _id").text-decoration-none
  VCard.product-card
    VImg(:src="image" cover height="200")
    VCardTitle.mt-2.text-primary {{ name }}
    VCardSubtitle ${{ price }}
    VCardText {{ description }}
    VCardActions
      VSpacer
      VBtn(color="primary" prepend-icon="mdi-cart" @click="addCart") 加入購物車
</template>

<script setup>
import { useApi } from '@/composables/axios'
import router from '@/router'
import { useUserStore } from '@/store/user'
import { useSnackbar } from 'vuetify-use-dialog'

const { apiAuth } = useApi()
const user = useUserStore()
const createSnackbar = useSnackbar()

const props = defineProps(['_id', 'category', 'description', 'image', 'name', 'price', 'sell'])

const addCart = async () => {
  if (!user.isLogin) {
    router.push('/login')
    createSnackbar({
      text: '請先登入再加入商品',
      showCloseButton: false,
      snackbarProps: {
        timeout: 3000,
        color: 'warning',
        location: 'bottom'
      }
    })
    return
  }
  try {
    const { data } = await apiAuth.patch('/users/cart', {
      product: props._id,
      quantity: 1
    })
    user.cart = data.result
    createSnackbar({
      text: '新增成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
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
}
</script>
