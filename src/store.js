import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

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
            phoneType: 'Celular',
            countryCode: '+58',
            phoneNumber: '',
            email: ''
        },
        user: []
    },
    plugins: [createPersistedState()],
    getters: {
        genderActive: function(state) { 
            return {
                male: state.newUser.gender == 'male',
                female: state.newUser.gender == 'female'
            } 
        },
        bloodActive: function(state) { 
            return {
                Op: state.newUser.bloodType == 'O+',
                On: state.newUser.bloodType == 'O-',
                Ap: state.newUser.bloodType == 'A+',
                An: state.newUser.bloodType == 'A-',
                Bp: state.newUser.bloodType == 'B+',
                Bn: state.newUser.bloodType == 'B-',
                ABp: state.newUser.bloodType == 'AB+',
                ABn: state.newUser.bloodType == 'AB-',
                Unknown: state.newUser.bloodType == 'Desconocido',
            } 
        }
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
        },
        addGender (state, e) {
            state.newUser.gender = e.path[0].value;
            e.preventDefault();
        },
        addBloodType (state, e) {
            state.newUser.bloodType = e.path[0].value;
            e.preventDefault();
        }
    },
    actions: {
        addUser: function(context,e) {
            context.commit('addUser',e)
        },
        addGender: function(context, e) {
            context.commit('addGender', e)
        },
        addBloodType: function(context, e) {
            context.commit('addBloodType', e)
        }
    }
})
