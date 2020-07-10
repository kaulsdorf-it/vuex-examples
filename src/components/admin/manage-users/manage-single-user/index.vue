<template>
  <ValidationObserver ref="observer" tag="form" v-slot="{ invalid, untouched }">
    <v-card style="height: calc(100vh - 132px); overflow-y: hidden" tile>
      <v-card-text style="height: calc(100vh - 185px); overflow-y: auto">
        <v-row>
          <v-col cols="3">
            <ValidationProvider :rules="rules.salutation" name="Die Anrede" v-slot="{ errors, validate }">
              <v-select
                :error-messages="errors"
                :items="salutationOptions"
                @input="validate"
                class="mt-4"
                clearable
                filled
                item-text="text"
                item-value="value"
                label="Anrede"
                v-model="user.salutation"
              />
            </ValidationProvider>
          </v-col>

          <v-col cols="3">
            <ValidationProvider :rules="rules.firstName" name="Der Vorname" v-slot="{ errors }">
              <v-text-field
                :error-messages="errors"
                class="mt-4"
                clearable
                filled
                label="Vorname"
                v-model="user.firstName"
              />
            </ValidationProvider>
          </v-col>

          <v-col cols="3">
            <ValidationProvider :rules="rules.lastName" name="Der Nachname" v-slot="{ errors }">
              <v-text-field
                :error-messages="errors"
                class="mt-4"
                clearable
                filled
                label="Nachname"
                v-model="user.lastName"
              />
            </ValidationProvider>
          </v-col>

          <v-col cols="3">
            <ValidationProvider :rules="rules.age" name="Das Alter" v-slot="{ errors }">
              <v-text-field
                :error-messages="errors"
                class="mt-4"
                clearable
                filled
                label="Alter"
                type="number"
                v-model="user.age"
              />
            </ValidationProvider>
          </v-col>
        </v-row>
        Single User {{ user }}
      </v-card-text>

      <v-divider/>

      <v-card-actions class="grey lighten-3">
        <v-btn
          :disabled="untouched"
          @click="reset"
          color="secondary"
          text
        >
          Zurücksetzen
        </v-btn>
        <v-spacer/>
        <v-btn
          @click="submit"
          color="primary"
        >
          Speichern
        </v-btn>
      </v-card-actions>

    </v-card>
  </ValidationObserver>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        getById: 'users/getById',
        users: 'users/getAll',
      }),
      userId() {
        return this.$route.params.userId
      },
    },

    created() {
      this.init()
    },

    data: () => ({
      user: {},
      salutationOptions: [
        { value: 'f', text: 'Frau' },
        { value: 'm', text: 'Herr' },
      ],
      rules: {
        salutation: {
          required: true,
        },
        firstName: {
          required: true,
          min: 3,
        },
        lastName: {
          required: true,
          min: 2,
        },
        age: {
          required: true,
          min_value: 18,
          max_value: 120,
        }
      }
    }),

    methods: {
      ...mapActions({
        updateUser: 'users/updateAction',
      }),
      init() {
        const userInStore = this.getById(this.userId) || {}
        this.user = JSON.parse(JSON.stringify(userInStore))
      },
      submit() {
        this.updateUser(this.user)
      },
      reset() {
        this.init()
      }
    },

    watch: {
      '$route.params.userId'() {
        this.init()
      },
      users() {
        this.init()
      },
    },
  }
</script>
