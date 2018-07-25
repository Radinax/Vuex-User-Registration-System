<template>
  <div>
    <form @submit="addUser">
      <div class="container">
        <!--First Name-->
        <div class="label-title">
          <label>Datos personales</label>
        </div>
        <div>
          <input type="text" v-model="firstName" placeholder="Nombre*"/>
          <input type="text" v-model="lastName" placeholder="Apellidos"/>
        </div>
        <!-- Gender -->
        <div class="gender-container">
          <button 
            class="gender" 
            value="male" 
            @click="addGender"
            v-bind:class="{ active: genderActive.male }"><span><font-awesome-icon icon="male" /></span>Masculino</button>
          <button 
            class="gender" 
            value="female" 
            @click="addGender"
            v-bind:class="{ active: genderActive.female }"><span><font-awesome-icon icon="female" /></span>Femenino</button>
        </div>  
        <!-- Identification -->
        <div class="id">
          <div class="select is-dark">
            <select v-model="idType">
              <option disabled value="">Tipo de Identificacion</option>
              <option>Cedula</option>
              <option>Pasaporte</option>
            </select>
          </div>
          <input type="number" v-model="idNumber" placeholder="Numero de Identificacion"/>
        </div>
        <!--Blood Type-->
        <div class="label-subtitle">
          <label>Tipo de Sangre</label>
        </div>
        <div class="blood-group">
          <button class="bloodType" value="O+" @click="addBloodType" v-bind:class="{ active: bloodActive.Op }">O+</button>
          <button class="bloodType" value="O-" @click="addBloodType" v-bind:class="{ active: bloodActive.On }">O-</button>
          <button class="bloodType" value="A+" @click="addBloodType" v-bind:class="{ active: bloodActive.Ap }">A+</button>
          <button class="bloodType" value="A-" @click="addBloodType" v-bind:class="{ active: bloodActive.An }">A-</button>
          <button class="bloodType" value="B+" @click="addBloodType" v-bind:class="{ active: bloodActive.Bp }">B+</button>
          <button class="bloodType" value="B-" @click="addBloodType" v-bind:class="{ active: bloodActive.Bn }">B-</button>
          <button class="bloodType" value="AB+" @click="addBloodType" v-bind:class="{ active: bloodActive.ABp }">AB+</button>
          <button class="bloodType" value="AB-" @click="addBloodType" v-bind:class="{ active: bloodActive.ABn }">AB-</button>
          <button class="unknown" value="Desconocido" @click="addBloodType" v-bind:class="{ active: bloodActive.Unknown }">Desconocido</button>
        </div>
        <!-- Phone Number -->
        <div class="label-title">
          <label>Datos de contacto</label>
        </div>
        <div class="phone">
          <div class="select is-dark">
            <select v-model="phoneType">
              <option selected value="Celular" >Celular</option>
              <option>Casa</option>
            </select>
          </div>
          <div class="select is-dark">
            <select class="country-code" v-model="countryCode">
              <option selected value="+58">+58</option>
              <option>+506</option>
            </select>
          </div>
          <input class="phone-number" type="number" v-model="phoneNumber" placeholder="Phone Number"/>
          <!-- Email -->
          <input class="email" type="email" v-model="email" placeholder="Correo Electronico" />
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

import { mapActions, mapGetters } from 'vuex'

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
    },
    ...mapGetters([
      'genderActive',
      'bloodActive'
    ])
    
  },
  methods: {
    ...mapActions([
      'addUser',
      'addGender',
      'addBloodType'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.active {
  background-color: #00bfff !important;
  color: white;
  border: none !important;
}
input {
  padding: 12px 20px;
  margin: 8px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #8c8c8c;
  color: #8c8c8c;
}
input[type=text] {
  width: 350px;
  font-size: 1.5em;
}
input[type=number] {
  width: 200px;
  font-size: 1em;
  -moz-appearance:textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
input[type=email] {
  width: 200px;
  font-size: .8em;
}
input[type=submit] {
  width: 200px;
  font-size: .8em;
  background-color: #00bfff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #00bfff;
    border: 1px solid #8c8c8c;
  }
}   
.gender {
  padding: 6px;
  width: 140px;
  margin: 0px 5px;
  border-radius: 5px;
  background-color: white;
  border: 1px #8c8c8c solid;
  cursor: pointer;
  span {
    margin-right: 5px;
  }
}
.select {
  margin-top: 20px;
  select {
    border: none;
    border-bottom: 1px solid #8c8c8c;
    border-radius: 0;
  }
}
select::-ms-expand { 
  display: none; /* hide the default arrow in ie10 and ie11 */
}
.gender-container {
  padding-right: 200px;
}
select {
  width: 100px;
  padding: 12px 20px;
  border: none;
  border-bottom: 1px solid #8c8c8c;
  margin: 0px 5px;
}
.id {
  select {
    width: 350px;
  }
  input {
    width: 350px;
  }
}
.phone {
  .country-code{
    width: 85px;
  }
  input {
    padding: 15px 10px 10px 0px;
    // margin: 8px;
  }
}
textarea:focus, input:focus, select:focus, button:focus{
    outline: none;
}
.bloodType {
  padding: 8px;
  width: 42px;
  margin-right: 5px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #8c8c8c;
  cursor: pointer;
}
.blood-group {
  text-align: left;
  margin-bottom: 20px;
}
.unknown {
  padding: 10px;
  width: 100px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid #8c8c8c;
  cursor: pointer;
}
.label-title {
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 2px;
}
.label-subtitle {
  margin-top: 10px;
  font-size: .75em;
}
.container {
  margin-top: 70px; 
  border-radius: 3px;
  padding: 20px;
  width: 800px;
  text-align: left;
  background-color: white;
  box-shadow: 0 0 5px #888;
}
@media (max-width: 768px) {
  .container {
    width: 700px;
  }
}
@media (max-width: 500px) {
  .container {
    width: 400px;
  }
}
</style>
