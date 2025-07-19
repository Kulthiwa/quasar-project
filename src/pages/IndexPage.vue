<template>
  <q-page class="q-pa-md">

    <h5>กรอกข้อมูล</h5>

    <q-form @submit="onSubmit">

      <q-input
        v-model="name"
        label="ชื่อ"
        outlined
        dense
        required
      />

      <q-input
        v-model.number="age"
        label="อายุ"
        type="number"
        outlined
        dense
        required
        class="q-mt-md"
      />

      <q-btn
        label="บันทึก"
        type="submit"
        color="primary"
        class="q-mt-lg"
      />
    </q-form>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const age = ref(null)

function onSubmit () {
  console.log('ชื่อ:', name.value)
  console.log('อายุ:', age.value)
  alert(`ชื่อ: ${name.value}, อายุ: ${age.value}`)

}
</script>

<style scoped>
</style>