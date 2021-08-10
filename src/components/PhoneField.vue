<template>
  <v-form>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md3>
          <v-text-field
            id="phone"
            label="Phone Number"
            type="tel"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import intlTelInput from 'intl-tel-input';
import utils from 'intl-tel-input/build/js/utils';

export default {
  mounted() {
    const input = document.querySelector('#phone');
    intlTelInput(input, {
      // any initialisation options go here
      autoPlaceholder: 'aggressive',
      utilsScript: utils
    });
  }
};
</script>
