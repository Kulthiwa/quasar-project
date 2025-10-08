<template>
  <q-page class="q-pa-md">
    <div class="q-gutter-md row">
      <q-card class="col-12 col-md-6 offset-md-3" flat bordered>
        <q-card-section>
          <div class="text-h6">Student Form: 6704101311 Kulthiwa Miakhunthod</div>
          <div class="text-subtitle2">This form fulfills assignment 1.3</div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <q-form @submit="onSubmit" class="q-gutter-md">
            <q-input
              filled
              v-model="formData.id"
              label="Student ID (เลขประจำตัว)"
              lazy-rules
              :rules="[val => (val && val.length > 0) || 'กรุณากรอกรหัสนักศึกษา']"
            />

            <q-input
              filled
              v-model="formData.fullName"
              label="Full Name (ชื่อ-นามสกุล)"
              lazy-rules
              :rules="[val => (val && val.length > 0) || 'กรุณากรอกชื่อ-นามสกุล']"
            />

            <q-input
              filled
              v-model="formData.email"
              type="email"
              label="Email"
              lazy-rules
              :rules="[val => (val && val.includes('@')) || 'กรุณากรอกอีเมลให้ถูกต้อง']"
            />
            
            <div class="q-mt-md">
              <q-btn label="Submit Data" type="submit" color="primary"/>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const formData = ref({
  id: '',
  fullName: '',
  email: ''
});

function onSubmit() {
  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
    message: 'Form Data Submitted Locally!'
  });
}
</script>
