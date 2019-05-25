<template>
    <div :class="['modal', active ? 'is-active' : '']">
        <div class="modal-background" @click="closeModal()"></div>
        <form @submit.prevent="sendForm" class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Crear Sala</p>
            </header>
            <section class="modal-card-body">
                <div class="field">
                    <label class="label">Nombre del Creador</label>
                    <div class="control">
                        <input class="input" v-model="form.user" type="text" placeholder="Nombre" required>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Magnet Torrent Link</label>
                    <div class="control">
                        <input class="input" v-model="form.link" type="text" placeholder="Link" required>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Seleccionar Película</label>
                    <div class="control">
                        <div class="select is-multiple">
                            <select v-model="form.film_id" multiple size="8" class="selectFilm">
                                <option
                                        v-for="film in films"
                                        :key="film.id"
                                        :value="film.id"
                                        v-text="film.name"/>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-inverted is-outlined create-room" :disabled="!validateForm" type="submit">
                    Crear
                </button>
                <a class="button is-danger is-outlined" @click="closeModal()">Cancelar</a>
            </footer>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CreateRoom',
  props: ['active'],
  data () {
    return {
      form: {
        user: null,
        link: null,
        film_id: []
      },
      search: ''
    }
  },
  computed: {
    ...mapGetters({
      films: 'getFilms'
    }),
    validateForm () {
      return this.form.user && this.form.film_id && this.form.link
    }
  },
  methods: {
    ...mapActions(['createRoom']),
    closeModal () {
      this.$emit('closeModal')
    },
    sendForm () {
      const film = {
        film_id: this.form.film_id[0],
        user: this.form.user,
        link: this.form.link
      }
      this.createRoom(film)
    }
  }
}
</script>

<style scoped>
    .modal-card, .modal-card-head, .modal-card-body, .modal-card-foot, .selectFilm {
        background: #1c212e;
        border: 0px;
        border-radius: 0px;
    }

    .modal-card-title {
        height: 40px;
        color: #8ebcee;
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

    .field .label {
        color: #949cb0;
    }

    .control {
        background: linear-gradient(135deg, #8ebcee, #388fff);
        padding: 3px;
        margin-bottom: 10px;
    }

    .input {
        border-radius: 0px;
        background: #1c212e;
        border: 1px solid transparent;
        color: #949cb0;
    }

    .input::placeholder {
        color: #949cb0;
    }

    select, .select {
        width: 100%;
    }

    option {
        color: #949cb0;
    }
</style>
