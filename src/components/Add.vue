<template>
  <div>
    <div class="wrapper">
      <div class="item name">
        <input type="text" class="inside" placeholder="姓名" v-model="name">
      </div>
      <div class="item phone">
        <input type="text" class="inside" placeholder="手机号码" v-model="phone">
      </div>
      <div class="item button">
        <button class="add" @click="postPerson(name, phone)">添加</button>
        <span class="reminder" v-show="remind">{{sen}}</span>
      </div>
    </div>
    <transition name="slide">
      <div class="empty" v-if="isEmpty">你目前还没有联系人！</div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'add',
  data () {
    return {
      name: '',
      phone: '',
      remind: false,
      sen: ''
    }
  },
  methods: {
    postPerson (name, phone) {
      if (name === '' || phone === '') {
        this.remind = true
        this.sen = '请输入姓名和手机号'
      } else if (!(/^1[34578]\d{9}$/.test(phone))) {
        this.sen = '请输入正确的手机号码'
        this.remind = true
      } else {
        this.remind = false
        name = this.trim(name)
        phone = this.trim(phone)
        let onePerson = {
          name: name,
          phone: phone
        }
        this.$store.dispatch('addPerson', onePerson)
        this.name = ''
        this.phone = ''
      }
    },
    trim (str) {
      return str.replace(/^\s+|\s+$/gm, '')
    }
  },
  computed: mapGetters([
    'isEmpty'
  ])
}
</script>
