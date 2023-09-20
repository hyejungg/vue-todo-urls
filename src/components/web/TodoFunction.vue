<template>
    <div id="todo-function">
        <b-button class="mt-2 right" variant="light" @click="completeAll"
            >complete all</b-button
        >
        <b-button class="mt-2 right" variant="danger" @click="deleteAll"
            >clear all</b-button
        >
        <b-button class="mt-2 right" variant="primary" @click="share"
            >share</b-button
        >
        <i
            v-b-tooltip.hover
            id="tooltip-target"
            class="fa-regular fa-circle-question"
            style="color: #7ba4ea"
        />

        <b-tooltip target="tooltip-target" triggers="hover">
            나의 체크리스트 공유하려면 share 버튼을 click!
        </b-tooltip>
    </div>
</template>
<script>
export default {
    name: "TodoFunction",
    data: () => ({}),
    methods: {
        completeAll() {
            this.$emit("completeAll");
        },
        deleteAll() {
            this.$emit("deleteAll");
        },
        share() {
            this.$emit("share");
        },
    },
};
</script>
<style scoped>
#todo-function {
    margin-left: 10%;
    margin-right: 10%;
}
.right {
    margin-right: 0.5rem;
}
</style>
