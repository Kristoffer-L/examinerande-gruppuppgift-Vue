<script setup lang="ts"></script>

<template class="mainContainer">
  <h1>TryIt</h1>
  <nav>
    <ul class="navUl">
      <li><a href="/tryit/html">Home</a></li>
      <li><a href="/tryit/css">Adventures</a></li>
      <li><a href="/tryit/js">About</a></li>
      <li><a href="/tryit/vue">Contact</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.navUl {
  display: flex;
  gap: 20px;
  list-style-type: none;
  color: black;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.navUl li {
  border: 1px solid black;
  padding-inline: 10px;
  padding-block: 5px;
}

.navUl a {
  text-decoration: none;
  color: black;
}
.mainContainer {
  height: 100%;
  width: 100%;
  background-color: lightgray;
  padding: 20px;
}
</style>
