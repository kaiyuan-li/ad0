<template>    
    <div class="box">
    <article class="media">
        <div class="media-content">
        <div class="content">
            <p>
            <strong>{{currentComponentData.componentID}}</strong>
            <br>
            <textarea cols=100 rows=20 v-model="currentComponentData.callback">
            </textarea>
            </p>
        </div>
        </div>
    </article>
    </div>
</template>

<script>
export default {
  name: 'callbackBox',
  props: ['currentComponentData']
}
</script>

<style scoped>
#box {
  position: relative;
  margin-top: 60px;
  left: 500px;
  width: 50px;
  height: 20px;
}
</style>
