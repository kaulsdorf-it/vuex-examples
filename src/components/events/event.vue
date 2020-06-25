<template>
  <v-col cols="4">
    <v-card>
      <v-toolbar :color="event.confirmed ? 'success' : 'info'" dark dense outlined>
        <v-toolbar-title>
          {{ event.date.format('DD.MM.Y') }}
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <edit-type
          :disabled="event.confirmed"
          :type="event.type"
          @set="setType"
        />
      </v-card-text>

      <v-divider/>

      <v-card-actions class="grey lighten-3">
        <v-btn
          :disabled="event.confirmed"
          @click="removeAction(event.id)"
          color="error"
          icon
        >
          <v-icon>mdi-delete-outline</v-icon>
        </v-btn>

        <v-spacer/>

        <v-btn
          :disabled="event.confirmed"
          @click="confirmAction(event.id)"
          color="primary"
          icon
        >
          <v-icon>mdi-check</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
  import { mapActions } from 'vuex'
  import EditType from './edit-type'

  export default {
    components: {
      EditType,
    },

    methods: {
      ...mapActions({
        setTypeAction: 'events/setTypeAction',
        confirmAction: 'events/confirmAction',
        removeAction: 'events/removeAction',
      }),
      setType(type) {
        this.setTypeAction({
          eventId: this.event.id,
          type,
        })
      }
    },

    name: 'Events',

    props: {
      event: {
        type: Object,
        required: true,
      }
    }
  }
</script>
