<template>
  <v-chip class="white--text" color="blue-grey" label>Anzahl Events: {{ events.length }}</v-chip>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        events: 'events/getAll',
      }),
    },
  }
</script>
