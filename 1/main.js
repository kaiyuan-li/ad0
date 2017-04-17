Vue.component('member-list',{
    template: `
        <div>
            <member-item v-for="member in members" name="hi" key="item.id"></member-item>
        </div>`,
    data () {
        return {
            members: [
                    {name:"Ethan",gender:"male"},
                    {name:"Kevin",gender:"male"},
                    {name:"Qian",gender:"female"},
                    {name:"Yun",gender:"female"},
                    {name:"Suoqing",gender:"male"},
                    {name:"Saimei",gender:"female"},
                    {name:"Yuebing",gender:"male"}
                ]
        }
    }

});

Vue.component('member-item',{
    props: ["name", "gender"],
    template:`
        <li>
            <span>{{name}}<button>click me</button></span>
        </li>`
})

var app = new Vue({
    el:"#app"
}
)