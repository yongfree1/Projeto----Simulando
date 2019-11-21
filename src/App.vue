<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
import { extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
 
// Add the required rule
extend('required', {
  ...required,
  message: 'This field is required'
});
</script>
