const app = Vue.createApp({
    methods: {
        add: function () {
            this.todos = this.todos.concat({ done: false, text: '' });
        },
        clear: function () {
            this.todos = this.todos.filter(t => !t.done);
        }
    },
    computed: {
        message: function () {
            let len = this.todos.filter(t => !t.done).length;
            return len > 0 ? `${len} 項未完成` :　"";
        }
    },
    data() {
        return {
            todos: [],
        }
    }
});

const vm = app.mount('#app');