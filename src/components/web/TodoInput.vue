<template>
    <div id="todo-input">
        <b-form-input
            type="text"
            placeholder="Enter a new task"
            v-model="task"
            @keyup.enter="addTodo"
        />
    </div>
</template>
<script>
export default {
    name: "TodoInput",
    data: () => ({
        task: "",
    }),
    methods: {
        addTodo: function () {
            this.$emit("newTodo", this.task);
            this.task = "";
        },
    },
    computed: {},
};
</script>
<style scoped>
.input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    outline: none;
    border-radius: 0.25rem;
    border-style: none;
    border: solid 1px lightgray;
    box-sizing: border-box;
}
</style>
