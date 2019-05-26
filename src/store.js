import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const $http = axios.create({
  baseURL: 'https://sharefilm.ibon.dev/'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dbFilms: [],
    films: [
      {
        id: 1,
        name: 'Alicia en el país de las maravillas',
        image: 'https://img.tviso.com/ES/poster/w430/7b/62/7b62afe3a9c8d869c572697d8b1751ab.jpg',
        score: '8.6',
        description: 'El primer movimiento que Alicia decide hacer es coger un tren hasta la cuarta fila (se mueve dos casillas, movimiento completamente legal dado que es su primer movimiento). Pero, durante el viaje en tren, éste descarrila y Alicia, para no perder el equilibrio, se agarra a la barba de una Cabra que va sentada junto a ella.'
      },
      {
        id: 2,
        name: 'Jhon Wick 3',
        image: 'http://es.web.img3.acsta.net/pictures/14/10/01/14/18/135831.jpg',
        score: '6.9',
        description: 'John Wick es un exasesino a sueldo de la mafia rusa, más conocido como Baba Yagá (el hombre del saco). Viggo Tarazov, su antiguo socio, se refiere a él como un hombre enfocado, centrado, de voluntad pura y total compromiso, que trabaja como mercenario para cualquiera que pueda pagar por sus servicios para matar a otra persona.'
      }],
    rooms: []
  },
  getters: {
    getFilms (state) {
      return state.films
    },
    takeDBFilms (state) {
      return state.dbFilms
    },
    getRooms (state) {
      return state.rooms.map(room => Object.assign(room, state.films.find(film => film.id === parseInt(room.film_id))))
    }
  },
  mutations: {
    setRooms (state, rooms) {
      state.rooms = rooms
    },
    setDBFilms (state, films) {
      state.dbFilms = films
    }
  },
  actions: {
    getFilms: ({ commit }) => {
      $http.get('/room/list')
        .then(function (response) {
          commit('setRooms', response.data.items)
        })
    },
    getDBFilms: ({ commit }, query) => {
      $http.get('https://api.themoviedb.org/3/search/movie?api_key=4a19741587ccedce8ad54a8dbb7c2b71&language=es-ES&query=' + query + '&include_adult=true')
        .then(response => {
          commit('setDBFilms', response.data.results)
        }).catch(error => {
          console.log(error)
        })
    },
    createRoom: ({ commit }, data) => {
      return new Promise((resolve, reject) => {
        $http.post('/room/create', data)
          .then(function (response) {
            resolve(response)
          })
          .catch(function (error) {
            reject(error)
          })
      })
    }
  }
})
