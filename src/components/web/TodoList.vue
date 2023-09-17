<template>
    <div id="todo-user-list">
        <ul class="tasks mt-2">
            <li
                v-for="todo in todos"
                :key="todo.id"
                :class="{ 'task-completed': todo.completed }"
                class="task"
                @click="completeTodo(todo.id)"
            >
                <span class="task-text">{{ todo.task }}</span>
                <div class="task-delete" @click="deleteTodo(todo.id)">x</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "TodoListWeb",
    props: {
        todos: {
            require: true,
            type: Array,
        },
    },
    data: () => ({}),
    methods: {
        completeTodo: function (id) {
            this.$emit("completeTodo", id);
        },
        deleteTodo: function (id) {
            this.$emit("deleteTodo", id);
        },
    },
};
</script>
<style scoped>
.tasks {
    height: auto;
    padding: 0;
    list-style-type: none;
}

.task {
    padding: 10px;
    margin-bottom: 0.5rem;
    border: 0.5px solid #999;
    border-radius: 5px;
    color: #34495e;
    font-weight: bold;
    white-space: nowrap; /* 이 부분을 수정하여 텍스트가 줄 바꿈되지 않도록 설정 */
    overflow-x: scroll; /* 텍스트가 넘칠 경우 가로 스크롤 표시 */
}

.task:before {
    content: "\2002";
}

.task:hover {
    cursor: pointer;
}

.task-completed {
    text-decoration: line-through;
    color: #41b883;
}

.task-completed:before {
    content: "\2714";
}

.task-delete {
    display: inline-block;
    /* float: right; */
    color: #d22;
    width: 1.25rem;
    height: 1.25rem;
    text-align: center;
}
</style>
