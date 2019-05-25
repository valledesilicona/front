<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title" v-text="title"/>
      <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="columns">
          <div class="column is-one-fifth">
              <img src="https://bulma.io/images/placeholders/256x256.png">
          </div>
          <div class="column">
            <span v-text="description" />
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
    }
  }
}
</script>

<style scoped>
  .card {
    margin-bottom: 10px;
    background-color: #1c212e;
    border: 5px solid transparent;
  }

  a {
    color: #ddd;
  }

  .card-content, .card-header-title, .card-footer-item {
    color: #949cb0;
  }

  .card-header {
    border: 3px solid transparent;
    background: #131722;
  }

  .card-footer-item {
    border: 2px solid #949cb0;
  }

  .card-footer {
    border: 2px solid transparent;
  }

  .card-footer-item:hover {
    background: #131722;
  }

  .card-footer-item:active {
    background:black;
  }
</style>
