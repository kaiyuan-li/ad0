<template>
  <div id="app">
    <template v-for = "componentDataEntry in appModel">
      <my-component :componentData="componentDataEntry"></my-component>
    </template>
    <button id="btn" @click="addButton">add</button>
  </div>
</template>

<script>
import Hello from './components/Hello'
import MyComponent from './components/MyComponent'
export default {
  name: 'app',
  components: {
    Hello,
    MyComponent
  },
  methods: {
    addButton () {
      var newButton = {
        componentType: 'button',
        style: {
          position: 'absolute',
          left: '0px',
          top: '200px',
          width: '50px',
          height: '20px'
        }
      }
      this.appModel.push(newButton)
    }
  },
  data () {
    return {
      appModel: [
        {
          componentType: 'button',
          style: {
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '50px',
            height: '20px'
          }
        },
        {
          componentType: 'input',
          style: {
            position: 'absolute',
            left: '100px',
            top: '100px',
            width: '50px',
            height: '20px'
          }
        },
        {
          componentType: 'button',
          style: {
            position: 'absolute',
            left: '200px',
            top: '200px',
            width: '50px',
            height: '20px'
          }
        }
      ]
    }
  }
}
</script>

<style>
#app {
  position: relative;
  margin-top: 60px;
  width: 400px;
  height: 400px;
  background: green;
}
#btn {
  position: relative;
  margin-top: 60px;
  left: 500px;
  width: 50px;
  height: 20px;
}
</style>
