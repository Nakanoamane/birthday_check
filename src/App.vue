<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  body {
    background: #f0f0f0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  select {
    border: none;
    border-radius: 5px;
    padding: 4px 8px;
    margin: 0 4px;
    background: #f0f0f0;
    box-shadow:  2px 2px 10px #cccccc,
    -2px -2px 10px #ffffff;
  }
  select:hover {
    cursor: pointer;
    opacity: .8;
  }
  select:focus {
    outline: none;
  }
</style>
