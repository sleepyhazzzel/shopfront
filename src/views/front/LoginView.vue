<template lang="pug">
VContainer
  VRow
    VCol(cols="12")
      h1 登入
    VDivider
    VCol(cols="12")
      VForm(:disabled="isSubmitting" @submit.prevent="submit")
        VTextField(
          label="帳號" minlength="4" maxlength="20" counter
          v-model="account.value.value"
          :error-messages="account.errorMessage.value")
        VTextField(
          label="密碼" type="password" minlength="4" maxlength="20" counter
          v-model="password.value.value"
          :error-messages="password.errorMessage.value")
        VBtn(type="submit" color="success") 登入
</template>

<script setup>
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'

// Router 跳頁、Route 當下網頁網址資訊
import { useRouter } from 'vue-router'
import { useSnackbar } from 'vuetify-use-dialog'
// 不用打副檔名
import { useApi } from '@/composables/axios'
import { useUserStore } from '@/store/user'

const { api } = useApi()

const router = useRouter()
const createSnackbar = useSnackbar()

const user = useUserStore()

// 定義註冊表單資料格式
const schema = yup.object({
  account: yup
    .string()
    .required('帳號為必填欄位')
    .min(4, '使用者帳號過短')
    .max(20, '使用者帳號過長'),
  password: yup
    .string()
    .required('密碼為必填欄位')
    .min(4, '密碼長度過短')
    .max(20, '密碼長度過長')
})

// 先 useForm，再 useField
// isSubmitting 正在提交時
const { handleSubmit, isSubmitting } = useForm({
  // 跟上面的 schema 綁定
  validationSchema: schema
})
// useField('') 內容要與 schema 名稱相符
const account = useField('account')
const password = useField('password')

const submit = handleSubmit(async (values) => {
  try {
    const { data } = await api.post('/users/login', {
      account: values.account,
      password: values.password
    })
    user.login(data.result)
    createSnackbar({
      text: '登入成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'success',
        location: 'bottom'
      }
    })
    router.push('/')
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
