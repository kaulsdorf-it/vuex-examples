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

    <v-pagination
      :length="pages"
      v-model="page"
    />
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
        const end = this.getPage * this.getItemsPerPage - 1
        return this.events.filter((a, idx) => idx >= start && idx <= end)
      },
      page: {
        get() {
          return this.getPage
        },
        set(newPage) {
          this.setPage(newPage)
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

      window.setTimeout(load, 100)
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
      })
    },

    name: 'Events',

    watch: {
      events() {
        this.hasLoaded = true
      }
    }
  }
</script>
