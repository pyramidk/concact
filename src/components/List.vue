<template>
  <div class="list">
    <transition-group name="fade">
      <div class="wrapper" v-for="(item, index) in personList" :key="item" tag="div">
      	<div class="name item">
      		<i class="icon ion-person"></i>
      		<span>{{item.name}}</span>
      	</div>
      	<div class="number item">
      		<i class="icon ion-android-call"></i>
      		<span>{{item.phone}}</span>
      	</div>
      	<div class="item">
          <button class="delete" @click="deletePerson(index)">移除</button>
      	</div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'list',
  data () {
    return {
      tId: null
    }
  },
  mounted () {
    this.$store.dispatch('init')
  },
  methods: {
    deletePerson (index) {
      clearTimeout(this.tId)
      this.tId = setTimeout(() => {
        this.$store.dispatch('delete', index)
      }, 250)
    }
  },
  computed: mapGetters([
    'personList'
  ])
}
</script>
