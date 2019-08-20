<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <Test/>
    <AllFriends :friends="friends" @delete="deleteFriend"/>
    <OnlineFriends :friends="friends"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Test from './components/Test'

import AllFriends from './components/AllFriends'
import OnlineFriends from './components/OnlineFriends'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test,
    AllFriends,
    OnlineFriends
  },
  data () {
    return {
      friends: [
        {name: 'Bob', online: true},
        {name: 'Jim', online: false},
        {name: 'Ted', online: true},
      ]
    }
  },
  methods: {
    deleteFriend(payload){
      console.log(payload)
      this.friends = this.friends.filter(friend => { return friend.name !== payload.name })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
