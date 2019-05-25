import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const $http = axios.create({
  baseURL: 'https://sharefilm.ibon.dev/'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiFilms: [
      {
        id: 1,
        name: 'Alicia en el país de las maravillas',
        image: 'https://img.tviso.com/ES/poster/w430/7b/62/7b62afe3a9c8d869c572697d8b1751ab.jpg',
        score: '8.6',
        user: 'Evaristo',
        description: 'El primer movimiento que Alicia decide hacer es coger un tren hasta la cuarta fila (se mueve dos casillas, movimiento completamente legal dado que es su primer movimiento). Pero, durante el viaje en tren, éste descarrila y Alicia, para no perder el equilibrio, se agarra a la barba de una Cabra que va sentada junto a ella.'
      },
      {
        id: 2,
        name: 'Jhon Wick 3',
        image: 'http://es.web.img3.acsta.net/pictures/14/10/01/14/18/135831.jpg',
        score: '6.9',
        user: 'Eugenesio',
        description: 'John Wick es un exasesino a sueldo de la mafia rusa, más conocido como Baba Yagá (el hombre del saco). Viggo Tarazov, su antiguo socio, se refiere a él como un hombre enfocado, centrado, de voluntad pura y total compromiso, que trabaja como mercenario para cualquiera que pueda pagar por sus servicios para matar a otra persona.'
      }
    ]
  },
  getters: {
    getFilms (state) {
      return state.apiFilms
    }
  },
  mutations: {

  },
  actions: {
    createRoom: ({ commit }, data) => {
      $http.post('/room/create', data)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
})
