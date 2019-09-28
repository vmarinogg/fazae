<template>
  <div class="d-inline-flex">
    <v-text-field v-model="task" @keyup.enter="localAdd" placeholder="sua task"></v-text-field>
    <v-btn rounded :loading="loading" @click="localAdd" color="success">ADD</v-btn>
  </div>
</template>