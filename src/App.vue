<template>
  <div id="app">
  	<div class="nav">
  		<span>通讯录</span>
  	</div>
  	<div class="category">
  		<span>姓名</span>
  		<span>手机号码</span>
  		<span>动作</span>
  	</div>
  	<Add></Add>
    <List></List>
  </div>
</template>

<script>
import List from './components/List'
import Add from './components/Add'
export default {
  name: 'app',
  components: {
    Add,
    List
  }
}
</script>
