<template>
  <div>
    <form @submit="addUser">
      <div class="container">
        <!--First Name-->
        <div>
          <input type="text" v-model="firstName" placeholder="Nombre"/>
          <input type="text" v-model="lastName" placeholder="Apellidos"/>
        </div>
        <!-- Gender -->
        <div>
          <input type="radio" name="gender" id="female" value="female" v-model="gender">
          <label for="female">Female</label>
          <input type="radio" name="gender" id="male" value="male" v-model="gender">
          <label for="female">Male</label>
        </div>  
        <!-- Identification -->
        <div>
          <select v-model="idType">
            <option disabled value="">Type of Id</option>
            <option>Id Documentation</option>
            <option>Passport</option>
          </select>
          <input type="number" v-model="idNumber" placeholder="Id Number"/>
        </div>
        <!--Blood Type-->
        <input type="radio" name="blood" value="O+" v-model="bloodType"><label>O+</label>
        <input type="radio" name="blood" value="O-" v-model="bloodType"><label>O-</label>
        <input type="radio" name="blood" value="A+" v-model="bloodType"><label>A+</label>
        <input type="radio" name="blood" value="A-" v-model="bloodType"><label>A-</label>
        <input type="radio" name="blood" value="B+" v-model="bloodType"><label>B+</label>
        <input type="radio" name="blood" value="B-" v-model="bloodType"><label>B-</label>
        <input type="radio" name="blood" value="AB+" v-model="bloodType"><label>AB+</label>
        <input type="radio" name="blood" value="AB-" v-model="bloodType"><label>AB-</label>
        <!-- Phone Number -->
        <div>
          <select v-model="phoneType">
            <option disabled value="">Phone Type</option>
            <option>CellPhone</option>
            <option>HomePhone</option>
          </select>
          <select v-model="countryCode">
            <option disabled value="">Country Code</option>
            <option>+58</option>
            <option>+506</option>
          </select>
          <input type="number" v-model="phoneNumber" placeholder="Phone Number"/>
          <!-- Email -->
          <input type="email" v-model="email" placeholder="Correo Electronico" />
        </div>
        <!-- Submit -->
        <div>
          <input type="submit" value="submit"/>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  computed: {
    firstName: {
      get () {
        return this.$store.state.newUser.firstName
      },
      set (value) {
        this.$store.commit('updateFirstName', value)
      }
    },
    lastName: {
      get () {
        return this.$store.state.newUser.lastName
      },
      set (value) {
        this.$store.commit('updateLastName', value)
      }
    },
    gender: {
      get () {
        return this.$store.state.newUser.gender
      },
      set (value) {
        this.$store.commit('updateGender', value)
      }
    },
    idType: {
      get () {
        return this.$store.state.newUser.idType
      },
      set (value) {
        this.$store.commit('updateIdType', value)
      }
    },
    idNumber: {
      get () {
        return this.$store.state.newUser.idNumber
      },
      set (value) {
        this.$store.commit('updateIdNumber', value)
      }
    },
    bloodType: {
      get () {
        return this.$store.state.newUser.bloodType
      },
      set (value) {
        this.$store.commit('updateBloodType', value)
      }
    },
    phoneType: {
      get () {
        return this.$store.state.newUser.phoneType
      },
      set (value) {
        this.$store.commit('updatePhoneType', value)
      }
    },
    countryCode: {
      get () {
        return this.$store.state.newUser.countryCode
      },
      set (value) {
        this.$store.commit('updateCountryCode', value)
      }
    },
    phoneNumber: {
      get () {
        return this.$store.state.newUser.phoneNumber
      },
      set (value) {
        this.$store.commit('updatePhoneNumber', value)
      }
    },
    email: {
      get () {
        return this.$store.state.newUser.email
      },
      set (value) {
        this.$store.commit('updateEmail', value)
      }
    }
    
  },
  methods: {
    ...mapActions([
      'addUser'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

</style>
