<template>
    <div @mousedown="mouseDownFcn" @click="handleComponentSelected">
        <button v-if="componentData.componentType == 'button'" :style="componentData.style">
            {{componentData.componentType}}
        </button>
        <input v-else-if="componentData.componentType == 'input'" type="text" placeholder="text" :style="componentData.style">    
    </div>  
</template>

<script>
import store from '../store'
export default {
  name: 'myComponent',
  props: ['componentData', 'currentComponentData'],
  methods: {
    handleComponentSelected () {
      store.commit('UPDATE_COMPONENT_NAME', this.componentData.componentID)
    },
    mouseDownFcn (event) {
      var mousePosition = [event.offsetX, event.offsetY]
      var mouseMoveHandler = this.mouseMoveFcn.bind(this, mousePosition)
      event.currentTarget.parentNode.addEventListener('mousemove', mouseMoveHandler)
      event.currentTarget.parentNode.addEventListener('mouseup', this.mouseUpFcn.bind(this, mouseMoveHandler), 'once')
    },
    mouseMoveFcn (mousePosition, event) {
      this.componentData.style.left = event.pageX - mousePosition[0] - event.currentTarget.offsetLeft + 'px'
      this.componentData.style.top = event.pageY - mousePosition[1] - event.currentTarget.offsetTop + 'px'
    },
    mouseUpFcn (mouseMoveHandler) {
      event.currentTarget.removeEventListener('mousemove', mouseMoveHandler)
    }
  }
}
</script>
