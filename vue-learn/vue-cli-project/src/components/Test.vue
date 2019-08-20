<template>
    <div class="test">
        <h2>{{ test1 }}</h2>
        <h6>{{ secretmsg }}</h6>
    </div>
</template>

<script>
export default {
    name: 'Test',
    data () {
        return {
            test1: "From Test",
            secretmsg: "This is from a testing component"
        }
    }
}
</script>


<style>
.test {
    border: 1px solid red;
}
</style>