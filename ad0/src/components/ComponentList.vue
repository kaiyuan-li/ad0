<template>
    <div @mousedown="mouseDownFcn">
        <button v-if="componentType == 'button'">
            {{componentType}}
        </button>
        <input v-else-if="componentType == 'input'" type="text" placeholder="text">    
    </div>  
</template>

<script>
export default {
  name: 'componentList',
  props: ['componentType'],
  methods: {
    mouseDownFcn (event) {
      var mousePosition = [event.offsetX, event.offsetY]
      var mouseMoveHandler = this.mouseMoveFcn.bind(this, mousePosition)
      event.currentTarget.parentNode.addEventListener('mousemove', mouseMoveHandler)
      event.currentTarget.parentNode.addEventListener('mouseup', this.mouseUpFcn.bind(this, mouseMoveHandler), 'once')
    },
    mouseMoveFcn (mousePosition, event) {
      this.style.left = event.pageX - mousePosition[0] - event.currentTarget.offsetLeft + 'px'
      this.style.top = event.pageY - mousePosition[1] - event.currentTarget.offsetTop + 'px'
    },
    mouseUpFcn (mouseMoveHandler) {
      event.currentTarget.removeEventListener('mousemove', mouseMoveHandler)
    }
  }
}
</script>
