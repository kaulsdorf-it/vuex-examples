<template>
  <v-select
    :disabled="disabled"
    :items="types"
    label="Art des Events"
    v-model="valueToEdit"
  />
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        types: 'events/getTypes',
      }),
      valueToEdit: {
        get() {
          return this.type
        },
        set(value) {
          this.$emit('set', value)
        }
      }
    },

    name: 'EditType',

    props: {
      type: {
        type: String,
        default: null,
      },
      disabled: {
        type: Boolean,
        default: false,
      }
    }
  }
</script>
