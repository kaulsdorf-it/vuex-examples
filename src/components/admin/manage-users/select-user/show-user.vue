<template>
  <v-list-item
    :to="{ name: 'manage-single-user', params: { userId: user.id } }"
  >
    <v-list-item-content>
      <v-list-item-title>{{ user.firstName }} {{ user.lastName }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        getById: 'users/getById',
      }),
      user() {
        return this.getById(this.userId)
      }
    },

    props: {
      userId: {
        type: Number,
        required: true,
      },
    },
  }
</script>
