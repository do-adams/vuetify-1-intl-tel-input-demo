<template>
  <v-form>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md3>
          <v-text-field
            v-model="phone"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            type="tel"
          ></v-text-field>
          <p>Phone number: {{ realPhoneNumber }}</p>
          <p>Is valid phone number? {{ isValidPhoneNumber }}</p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import intlTelInput from 'intl-tel-input';
import utils from 'intl-tel-input/build/js/utils';

// Babel config is pretty basic rn - no new logical operators so a lot of boolean short-circuiting for quick reactive computed props

export default {
  data() {
    return {
      phone: '',
      iti: null
    };
  },
  computed: {
    realPhoneNumber() {
      return this.phone && this.iti && this.iti.getNumber();
    },
    isValidPhoneNumber() {
      return this.phone && this.iti && this.iti.isValidNumber();
    }
  },
  mounted() {
    const input = document.querySelector('#phone');
    this.iti = intlTelInput(input, {
      // any initialisation options go here
      autoPlaceholder: 'aggressive',
      utilsScript: utils
    });
  },
  beforeDestroy() {
    this.iti.destroy();
  }
};
</script>
