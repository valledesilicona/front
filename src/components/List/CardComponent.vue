<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title" v-text="film.title"/>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="columns">
          <div class="column is-one-fifth">
              <img :src="'https://image.tmdb.org/t/p/w500/' + film.poster_path">
          </div>
          <div class="column">
            <img width="20px" src="https://www.themoviedb.org/assets/2/v4/logos/stacked-green-cae7a95e2590dbdde28284ac26245cb2792788838f5c498b892e8d01c183e6f3.svg">
            <span class="score">
              <a class="score-text" v-text="film.vote_average"/>
            </span>
            <p class="description">
              Sala creada por: <span class="user" v-text="user"/>
            </p>
            <p class="description" v-text="film.overview" />
          </div>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <router-link :to="urlCinema" class="card-footer-item">Ver</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    film: {
      type: Object,
      required: true
    },
    user: {
      type: String,
      required: true
    },
    port: {
      type: Number,
      required: true
    }
  },
  computed: {
    urlCinema () {
      return '/cinema/' + this.port + '/' + this.user
    }
  }
}
</script>
