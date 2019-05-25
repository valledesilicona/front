<template>
  <div class="card">
    <div class="card-content">
      <aside class="menu">
        <p class="menu-label">
          General
        </p>
        <ul class="menu-list">
          <li><a>Dashboard</a></li>
          <li><a>Customers</a></li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuComponent'
}
</script>

<style scoped lang="scss">
  a, p {
    color: #949cb0;
  }
  .card {
    margin-bottom: 10px;
    background-color: #1c212e;
    border: 5px solid transparent;
  }

  .menu-list {
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
