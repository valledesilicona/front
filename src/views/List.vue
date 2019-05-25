<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <card-component
          v-for="film in films"
          :key="film.id"
          :title="film.name"
          :description="film.description"
        />
      </div>
      <div class="column is-one-quarter">
        <menu-component></menu-component>
      </div>
    </div>
  </div>
</template>

<script>
import MenuComponent from '../components/List/MenuComponent'
import CardComponent from '../components/List/CardComponent'
export default {
  name: 'List',
  components: { CardComponent, MenuComponent },
  data () {
    return {
      films: [
        {
          id: 1,
          name: 'Alicia en el país de las maravillas',
          description: 'El primer movimiento que Alicia decide hacer es coger un tren hasta la cuarta fila (se mueve dos casillas, movimiento completamente legal dado que es su primer movimiento). Pero, durante el viaje en tren, éste descarrila y Alicia, para no perder el equilibrio, se agarra a la barba de una Cabra que va sentada junto a ella.'
        },
        {
          id: 2,
          name: 'Jhon Wick',
          description: 'Mata todo lo que se mueve sin discriminación alguna'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 30px;
  }
</style>
