<template>
  <v-footer app class="pl-2 pr-2" color="blue-grey darken-1" dark style="height: 36px">
    <v-spacer/>
    <temlate v-if="$route.name === 'events'">
      Seite {{ page }} von {{ pages }}
    </temlate>
    <v-spacer/>
  </v-footer>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        events: 'events/getAll',
        getNumberOfPages: 'paging/getNumberOfPages',
        page: 'paging/getPage',
        getItemsPerPage: 'paging/getItemsPerPage',
      }),
      pages() {
        return this.getNumberOfPages(this.events.length)
      }
    },
  }
</script>
