<template>
    <div id="home-mobile">
        <h2 class="mt-4">체크리스트</h2>
        <b-row class="mt-4">
            <b-form-input
                id="input-nickname"
                :state="validateNickname"
                placeholder="Enter your nickname"
                v-model="nickname"
            >
            </b-form-input>
            <b-form-invalid-feedback
                v-if="nickname.length > 0 && !validateNickname"
                id="input-nickname-feedback"
            >
                영문자 또는 숫자만 입력 가능합니다.
            </b-form-invalid-feedback>
            <b-form-select
                class="mt-2"
                v-model="selected"
                :options="options"
            ></b-form-select>
            <b-button
                class="mt-2"
                size="sm"
                variant="primary"
                :disabled="!validateNickname"
                @click="goToTodoView"
                >Next</b-button
            >
        </b-row>
    </div>
</template>
<script>
export default {
    name: "HomeWeb",
    data: () => ({
        nickname: "",
        selected: "default",
        options: [
            { value: "default", text: "Please select an option" },
            { value: "travel", text: "여행" },
            { value: "study", text: "공부" },
            { value: "clean", text: "청소" },
        ],
    }),
    computed: {
        validateNickname() {
            const regex = /^[a-zA-Z0-9]+$/;
            return regex.test(this.nickname);
        },
    },
    methods: {
        goToTodoView() {
            this.$router.push({
                name: "UserTodoMain",
                params: { nickname: this.nickname, kind: this.selected },
                query: { list: btoa([]) },
            });
        },
    },
};
</script>
<style scoped>
p {
    font-size: 12px;
}
</style>
