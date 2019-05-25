<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title" v-text="title"/>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="columns">
          <div class="column is-one-fifth">
              <img :src="image">
          </div>
          <div class="column">
            <img width="23px" src="https://ia.media-imdb.com/images/M/MV5BMTczNjM0NDY0Ml5BMl5BcG5nXkFtZTgwMTk1MzQ2OTE@._V1_.png">
            <span class="score">
              <a class="score-text" v-text="score"/>
            </span>
            <p class="description">
              Sala creada por: <span class="user" v-text="user"/>
            </p>
            <p class="description" v-text="description" />
          </div>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Ver</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    score: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true
    }
  }
}
</script>
