Vue.component("message",{
    props:["title","body"],
    data () {
        return {
            isContentVisible: true
        }
    },
    template:`
    <article class="message">
		<div class="message-header">
			<p>{{title}}</p>
			<button class="delete" @click="toggleContentVisibility"></button>
		</div>
		<div class="message-body" v-show="isContentVisible">
			{{body}}
        </div>
	</article>`,
    methods: {
        toggleContentVisibility () {
            this.isContentVisible = ! this.isContentVisible
            this.$emit("hide")
        }
    }
    
})
var app=new Vue({
    el: '#app',
    data:{
        isHidden: false
    },
    methods:{
        hideContent () {
            this.isHidden = ! this.isHidden
        }
    }
}

)