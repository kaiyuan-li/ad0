<template>
    <div @mousedown="mouseDownFcn">
        <button v-if="componentData.componentType == 'button'" :style="componentData.style">
            {{componentData.componentType}}
        </button>
        <input v-else-if="componentData.componentType == 'input'" type="text" placeholder="text" :style="componentData.style">    
    </div>  
</template>

<script>
export default {
  name: 'myComponent',
  props: ['componentData'],
  methods: {
    mouseDownFcn (event) {
      this.mousePosition = []
      this.mousePosition[0] = event.offsetX
      this.mousePosition[1] = event.offsetY
      event.currentTarget.parentNode.addEventListener('mousemove', this.mouseMoveFcn)
      event.currentTarget.parentNode.addEventListener('mouseup', this.mouseUpFcn, 'once')
    },
    mouseMoveFcn (event) {
      this.componentData.style.left = event.pageX - this.mousePosition[0] - event.currentTarget.offsetLeft + 'px'
      this.componentData.style.top = event.pageY - this.mousePosition[1] - event.currentTarget.offsetTop + 'px'
    },
    mouseUpFcn (event) {
      event.currentTarget.removeEventListener('mousemove', this.mouseMoveFcn)
    }
  }
}
</script>
