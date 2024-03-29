<template lang="pug">
VContainer
  VRow.mt-6
    VCol(cols="12" md="6").pe-6
      VImg(:src="product.image")
    VCol(cols="12" md="6")
      h2 {{ product.name }}
      p {{ product.description }}
      VDivider.my-6
      h3.my-3 ${{ product.price }}
      VForm(:disabled="isSubmitting" @submit.prevent="submit").d-flex.align-center
        VSelect.pe-5(
          label="number" min="0" :items="['1', '2', '3', '4']"
          density="comfortable"
          v-model.number="quantity.value.value" :error-messages="quantity.errorMessage.value")
        VBtn.mb-5(type="submit" color="blue" height="45px" prepend-icon="mdi-cart" :loading="isSubmitting") 加入購物車
VOverlay(:model-value="!product.sell" persistent).justify-center.align-center
  VCard(width="300").text-center
    VCardTitle.text-red 已下架
    VCardActions
      VBtn(to="/" color="blue" block) 回首頁
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'
import { useUserStore } from '@/store/user'

const route = useRoute()
const router = useRouter()
const { api, apiAuth } = useApi()
const createSnackbar = useSnackbar()
const user = useUserStore()

const product = ref({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  sell: true,
  category: ''
})

const schema = yup.object({
  quantity: yup.number().typeError('格式錯誤').required('缺少數量').min(1, '數量最小為 1')
})
const { isSubmitting, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    quantity: 1
  }
})
const quantity = useField('quantity')

const submit = handleSubmit(async (values) => {
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
      product: product.value._id,
      quantity: values.quantity
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
})

onMounted(async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product.value._id = data.result._id
    product.value.name = data.result.name
    product.value.price = data.result.price
    product.value.description = data.result.description
    product.value.image = data.result.image
    product.value.sell = data.result.sell
    product.value.category = data.result.category

    document.title = `購物網 | ${product.value.name}`
  } catch (error) {
    console.log(error)
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
    router.push('/')
  }
})
</script>
