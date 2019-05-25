<template>
<div class="container">
  <header-component/>
  <search-component/>
  <list></list>
</div>
</template>
<script>
import SearchComponent from '../components/List/SearchComponent'
import List from '../views/List'
import HeaderComponent from '../components/HeaderComponent'
export default {
  components: { HeaderComponent, List, SearchComponent }
}
</script>
