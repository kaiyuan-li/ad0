<template>
  <div id="app">
  <div id="canvas">
    <template v-for = "componentDataEntry in appModel">
      <my-component :componentData="componentDataEntry" :currentComponentData="currentComponent"></my-component>
    </template>
    <button id="btn" @click="addButton">add</button>
  </div>
  <callback-box :currentComponentData="currentComponent"></callback-box>
  <button id="executeCallbackButton" @click="executeCallback">run callback</button>
  </div>
</template>

<script>
import MyComponent from './components/MyComponent'
import CallbackBox from './components/CallbackBox'
import store from './store'

export default {
  name: 'app',
  components: {
    MyComponent,
    CallbackBox
  },
  methods: {
    executeCallback () {
      var currentCallback = new Function(this.currentComponent.callback)
      currentCallback = currentCallback.bind(this)
      currentCallback()
    },
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
          componentID: 'btn1',
          style: {
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '50px',
            height: '20px'
          },
          callback: "console.log('btn1')"
        },
        {
          componentType: 'input',
          componentID: 'input1',
          style: {
            position: 'absolute',
            left: '100px',
            top: '100px',
            width: '50px',
            height: '20px'
          },
          callback: "console.log('input1')"
        },
        {
          componentType: 'button',
          componentID: 'btn2',
          style: {
            position: 'absolute',
            left: '200px',
            top: '200px',
            width: '50px',
            height: '20px'
          },
          callback: "console.log('btn2')"
        }
      ]
    }
  },
  computed: {
    currentComponent: function () {
      var findElement = function (arr, propName, propValue) {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i][propName] === propValue) {
            return arr[i]
          }
        }
      }
      return findElement(this.appModel, 'componentID', store.state.currentComponentID)
    }
  }
}
</script>

<style>
#canvas {
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
