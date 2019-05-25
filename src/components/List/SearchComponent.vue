<template>
<div class="search">
  <input class="input" type="text" placeholder="Buscar...">
</div>
</template>

<script>
export default {
  name: 'SearchComponent'
}
</script>

<style scoped>
.search {
  background: linear-gradient(135deg, #8ebcee, #388fff);
  padding: 7px;
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
</style>
