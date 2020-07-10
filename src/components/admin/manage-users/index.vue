<template>
  <v-container>
    <v-row>
      <v-col cols="3" pr-2>
        <select-user/>
      </v-col>
      <v-col cols="9" pl-2>
        <manage-single-user/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import SelectUser from './select-user'
  import ManageSingleUser from './manage-single-user'

  export default {
    components: {
      SelectUser,
      ManageSingleUser,
    },
  }
</script>
