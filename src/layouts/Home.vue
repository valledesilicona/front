<template>
<div class="container">
  <header-component/>
  <search-component @search="searchChange"/>
  <list :search="search"></list>
</div>
</template>
<script>
import SearchComponent from '../components/List/SearchComponent'
import List from '../views/List'
import HeaderComponent from '../components/HeaderComponent'
export default {
  data () {
    return {
      search: ''
    }
  },
  components: { HeaderComponent, List, SearchComponent },
  methods: {
    searchChange (string) {
      this.search = string
    }
  }
}
</script>
