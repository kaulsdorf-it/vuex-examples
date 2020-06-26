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
          <ShowTotal/>
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
          v-for="(event, idx) of itemsOfPage"
        />
      </v-row>
    </template>

    <span v-show="false">{{events}}</span>

    <v-row>
      <v-col cols="10">
        <v-pagination
          :length="pages"
          v-model="page"
        />
      </v-col>

      <v-col cols="2">
        <v-select
          :items="[3,6,9,12,15,18,21]"
          dense
          filled
          label="Items per Page"
          v-model="itemsPerPage"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  import Event from './event'
  import ShowTotal from './show-total'

  export default {
    components: {
      Event,
      ShowTotal,
    },

    computed: {
      ...mapGetters({
        events: 'events/getAll',
        types: 'events/getTypes',
        getTotalByType: 'events/getTotalByType',
        getNumberOfPages: 'paging/getNumberOfPages',
        getPage: 'paging/getPage',
        getItemsPerPage: 'paging/getItemsPerPage',
      }),
      itemsOfPage() {
        const start = (this.getPage - 1) * this.getItemsPerPage
        const end = this.getPage * this.getItemsPerPage
        return this.events.slice(start, end)
      },
      page: {
        get() {
          return this.getPage
        },
        set(newPage) {
          this.setPage(newPage)
        },
      },
      itemsPerPage: {
        get() {
          return this.getItemsPerPage
        },
        set(newValue) {
          this.setItemsPerPage(newValue)
          this.page = 1
        },
      },
      pages() {
        return this.getNumberOfPages(this.events.length)
      },
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

      window.setTimeout(load, 1000)
    },

    data: () => ({
      hasLoaded: true,
    }),

    methods: {
      ...mapActions({
        loadEvents: 'events/loadAction',
      }),
      ...mapMutations({
        setPage: 'paging/setPageMutation',
        setItemsPerPage: 'paging/setItemsPerPageMutation',
      }),
    },

    name: 'Events',

    watch: {
      events() {
        this.hasLoaded = true
      },
    },
  }
</script>
