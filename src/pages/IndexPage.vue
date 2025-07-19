# เปลี่ยนข้อความในฟอร์เป็นภาษาไทย
<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Your name "
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age"
        lazy-rules
        :rules="[
          val => val !== null && val !== ''  'Please type your age',
          val => val > 0 && val < 100  'Please type a real age'
        ]"
      />
      <q-toggle v-model="accept" label="I accept the license and terms" />
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>
[22:12]
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
  alert(ชื่อ: ${name.value}, อายุ: ${age.value})
}
</script>

<style scoped>
</style>