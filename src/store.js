import Vue from 'vue'
import Vuex from 'vuex'
import { MdField } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdField)
Vue.use(Vuex)

export const store = new Vuex.Store({
    strict: true,
    state: {
        newUser: {
            firstName: '',
            lastName: '',
            gender: '',
            idType: '',
            idNumber: '',
            bloodType: '',
            phoneType: '',
            countryCode: '',
            phoneNumber: '',
            email: ''
        },
        user: []
    },
    getters: {
        
    },
    mutations: {
        updateFirstName (state, firstName) {
            state.newUser.firstName = firstName
        },
        updateLastName (state, lastName) {
            state.newUser.lastName = lastName
        },
        updateGender (state, gender) {
            state.newUser.gender = gender
        },
        updateIdType (state, idType) {
            state.newUser.idType = idType
        },
        updateIdNumber (state, idNumber) {
            state.newUser.idNumber = idNumber
        },
        updateBloodType (state, bloodType) {
            state.newUser.bloodType = bloodType
        },
        updatePhoneType (state, phoneType) {
            state.newUser.phoneType = phoneType
        },
        updateCountryCode (state, countryCode) {
            state.newUser.countryCode = countryCode
        },
        updatePhoneNumber (state, phoneNumber) {
            state.newUser.phoneNumber = phoneNumber
        },
        updateEmail (state, email) {
            state.newUser.email = email
        },
        addUser (state,e) {
            state.user.push({
                firstName: state.newUser.firstName,
                lastName: state.newUser.lastName,
                gender: state.newUser.gender,
                idType: state.newUser.idType,
                idNumber: state.newUser.idNumber,
                bloodType: state.newUser.bloodType,
                phoneType: state.newUser.phoneType,
                countryCode: state.newUser.countryCode,
                phoneNumber: state.newUser.phoneNumber,
                email: state.newUser.email
            })
            state.newUser = {}
            e.preventDefault();
        }
    },
    actions: {
        addUser: function(context,e) {
            context.commit('addUser',e)
        }
    }
})
