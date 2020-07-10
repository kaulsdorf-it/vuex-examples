<template>
  <v-card style="height: calc(100vh - 132px); overflow-y: auto" tile>
    <v-card-text>
      <v-list v-model="selectUser">
        <show-user
          :key="user.id"
          :userId="user.id"
          v-for="user of users"
        />
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import ShowUser from './show-user'

  export default {
    components: {
      ShowUser,
    },

    computed: {
      ...mapGetters({
        users: 'users/getAll',
      }),
    },

    created() {
      this.load()
    },

    data: () => ({
      selectUser: null,
    }),

    methods: {
      ...mapActions({
        load: 'users/loadAction',
      }),
    }
  }
</script>
