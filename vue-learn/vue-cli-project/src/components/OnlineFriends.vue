<template>
    <div id="online-friends">
        <h2>Online Friends</h2>
        <div v-for="(friend, i) in friends" :key="i">
            <span id="friend" v-if="friend.online">{{friend.name}}</span>
        </div>
    </div>

</template>


<script>
export default {
    name: 'OnlineFriends',
    props: ['friends'],
    data() {
        return {

        }
    }
}
</script>


<style>
#online-friends{ 
    border: 1px green solid;

}
</style>