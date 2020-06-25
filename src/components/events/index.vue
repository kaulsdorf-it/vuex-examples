<template>
  <v-container>
    <template v-if="!hasLoaded">
      <v-overlay
        :value="true"
        absolute
      >
        <v-progress-circular
          :size="200"
          color="teal"
          indeterminate
        />
      </v-overlay>
    </template>

    <template v-else>
      <v-row>
        <v-col>
          <v-chip class="white--text" color="blue-grey" label>Anzahl Events: {{ events.length }}</v-chip>
        </v-col>

        <v-col :key="type" v-for="type of types">
          <v-chip label>
            Anzahl "{{ type }}": {{ getTotalByType(type) }}
          </v-chip>
        </v-col>
      </v-row>

      <v-row>
        <event
          :event="event"
          :key="idx"
          v-for="(event, idx) of events"
        />
      </v-row>
    </template>
  </v-container>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Event from './event'

  export default {
    components: {
      Event,
    },

    computed: {
      ...mapGetters({
        events: 'events/getAll',
        types: 'events/getTypes',
        getTotalByType: 'events/getTotalByType',
        getNumberOfPages: 'paging/getNumberOfPages',
        page: 'paging/getPage',
        getItemsPerPage: 'paging/getItemsPerPage',
      }),
      pages() {
        return this.getNumberOfPages(this.events.length)
      }
    },

    created() {
      const load = () => {
        if (this.events.length === 0) {
          this.loadEvents(100)
        }
      }

      if (this.events.length === 0) {
        this.hasLoaded = false
      } else {
        this.hasLoaded = true
      }

      window.setTimeout(load, 100)
    },

    data: () => ({
      hasLoaded: true,
    }),

    methods: {
      ...mapActions({
        loadEvents: 'events/loadAction',
      }),
    },

    name: 'Events',

    watch: {
      events() {
        this.hasLoaded = true
      }
    }
  }
</script>
