<template>
    <div id="todo-mobile">
        <nav class="mb-4">
            <router-link to="/">Home</router-link>
        </nav>
        <h3>{{ this.nickname }} 의 {{ displayKind }} 체크리스트</h3>
        <div>
            <todo-input @newTodo="addTodo" />
            <todo-function
                @completeAll="completeAll"
                @deleteAll="deleteAll"
                @share="share"
            />
            <todo-list
                :todos="todos"
                @completeTodo="completeTodo"
                @deleteTodo="deleteTodo"
            />
        </div>
    </div>
</template>
<script>
import TodoFunction from "@/components/mobile/TodoFunction.vue";
import TodoInput from "@/components/mobile/TodoInput.vue";
import TodoList from "@/components/mobile/TodoList.vue";
export default {
    name: "TodoMainMobile",
    components: {
        TodoList,
        TodoInput,
        TodoFunction,
    },
    data: () => ({
        nickname: "",
        kind: "",
        id: 0,
        todos: [],
    }),
    methods: {
        // TODO unescape, escape 가 브라우저 지원을 안하면 해당 방법은 변경해야 함.... https://jamssoft.tistory.com/274
        utf8ToBase64(str) {
            return btoa(unescape(encodeURIComponent(str)));
        },
        base64ToUtf8(str) {
            return decodeURIComponent(escape(atob(str)));
        },
        updateListInURL() {
            const todosJson = JSON.stringify(this.todos);
            const encodedTodos = this.utf8ToBase64(todosJson); // Base64 URL로 인코딩
            this.$router.replace({
                name: "UserTodoMain",
                params: { nickname: this.nickname },
                query: { list: encodedTodos }, // 인코딩된 데이터를 전달
            });
        },
        addTodo(newTask) {
            if (newTask.length === 0 || !newTask) {
                return;
            }
            this.todos.push({ id: this.id++, task: newTask, completed: false });
            this.updateListInURL();
        },
        completeTodo(id) {
            const item = this.todos.find((todo) => todo.id === id);
            item.completed = !item.completed;
            this.updateListInURL();
        },
        deleteTodo(id) {
            const index = this.todos.findIndex((todo) => todo.id === id);
            this.todos.splice(index, 1);
            this.updateListInURL();
        },
        completeAll() {
            if (this.todos.length == 0) {
                return;
            }
            this.todos.forEach((todo) => {
                todo.completed = true;
            });
            this.updateListInURL();
        },
        deleteAll() {
            if (this.todos.length == 0) {
                return;
            }
            this.todos = [];
            this.updateListInURL();
        },
        share() {
            const currentURL = window.location.href;
            window.navigator.clipboard
                .writeText(currentURL)
                .then(() => window.alert("copy!"));
        },
    },
    computed: {
        displayKind() {
            if (this.kind === "default") {
                return "";
            }
            return this.kind;
        },
    },
    mounted() {
        this.nickname = this.$route.params.nickname;
        this.kind = this.$route.params.kind;
        if (this.$route.query?.list) {
            const todosJson = JSON.parse(
                this.base64ToUtf8(this.$route.query.list)
            );
            this.todos = todosJson;
            this.id = this.todos.length - 1;
        }
    },
};
</script>
<style scoped></style>
