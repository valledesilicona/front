<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-fifth">
        <a class="button is-inverted is-outlined create-room"
           @click="eventModal()">Crear sala</a>
        <menu-component class="menu"></menu-component>
        <div class="footer">
          (c) Valle de silicona co. Todos los derechos reservados.
        </div>
      </div>
      <div class="column">
        <card-component
        v-for="film in filteredList"
        :key="film.id"
        :film="film.film"
        :user="film.user"
        :port="film.port"
        />
        <div v-if="filteredList.length === 0" style="text-align: center; width: 50%; margin: 0 auto">
          <h1 style="color: white">No hay ninguna sala activa</h1>
          <br>
          <a class="button is-inverted is-outlined create-room"
             @click="eventModal()">Crear sala</a>
        </div>
      </div>

    </div>
    <create-room
    :active="activeModal"
    @closeModal="eventModal()"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MenuComponent from '../components/List/MenuComponent'
import CardComponent from '../components/List/CardComponent'
import CreateRoom from '../components/List/CreateRoom'

export default {
  name: 'List',
  components: { CreateRoom, CardComponent, MenuComponent },
  props: ['search'],
  data () {
    return {
      activeModal: false,
      mockFilms: [
        {
          film_id: 299534,
          user: 'David',
          port: 5028
        },
        {
          film_id: 458156,
          user: 'Ramiro',
          port: 5028
        }
      ],
      filmsById: []
    }
  },
  computed: {
    ...mapGetters({
      films: 'getRooms'
    }),
    filteredList () {
      return this.filmsById.filter(film => {
        return film.film.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    ...mapActions(['getFilms', 'getDBFilmById']),
    eventModal () {
      this.activeModal = !this.activeModal
    }
  },
  mounted () {
    this.getFilms()
    this.mockFilms.forEach(i => {
      this.getDBFilmById(i.film_id).then(response => {
        const film = {
          user: i.user,
          port: i.port,
          film: response.data
        }
        this.filmsById.push(film)
      })
    })
  }
}
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 30px;
  }

  .create-room {
    width: 100%;
    border-color: #477BB3;
    color: #477BB3;
    background: transparent;
  }

  .create-room:hover {
    color: white;
  }

  .menu {
    margin-top: 15px;
  }

  .footer {
    background: transparent;
    color: #949cb0;
    padding: 10px;
  }
</style>
