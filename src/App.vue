<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <PhoneField />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import PhoneField from './components/PhoneField';

export default {
  name: 'App',
  components: {
    PhoneField
  }
};
</script>
