<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Categorías
      </p>
    </header>
    <div class="card-content">
      <aside class="menu">
        <ul class="menu-list">
          <li v-for="category in categories"
          :key="category">
            <a v-text="category" :key="category"/>
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuComponent',
  data () {
    return {
      categories: ['Horror', 'Acción', 'Aventura', 'Romance', 'Drama', 'Comedia']
    }
  }
}
</script>

<style scoped lang="scss">
  .menu-list {
    a {
      color: #949cb0;
    }

    li {
      border: 3px solid transparent;

      a:hover {
        background: #131722;
        color: #949cb0;
      }

      a:active {
        background: black;
        color: #949cb0;
      }
    }
  }
</style>
