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
          v-for="film in films"
          :key="film.id"
          :title="film.name"
          :score="film.score"
          :image="film.image"
          :user="film.user"
          :description="film.description"
        />
      </div>
    </div>
    <create-room
      :active="activeModal"
      @closeModal="eventModal()"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MenuComponent from '../components/List/MenuComponent'
import CardComponent from '../components/List/CardComponent'
import CreateRoom from '../components/List/CreateRoom'
export default {
  name: 'List',
  components: { CreateRoom, CardComponent, MenuComponent },
  data () {
    return {
      activeModal: false
    }
  },
  computed: {
    ...mapGetters({
      films: 'getFilms'
    })
  },
  methods: {
    eventModal () {
      this.activeModal = !this.activeModal
    }
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
