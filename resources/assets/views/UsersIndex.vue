<template>
    <div class="users">
        <div v-if="error" class="error">
            <p>{{ error }}</p>

            <p>
                <button @click.prevent="fetchData">
                    Try Again
                </button>
            </p>
        </div>

        <div class="loading" v-if="loading">
            Loading...
        </div>

        <ul v-if="users">
            <li v-for="{ id, name, email } in users">
                <strong>Name:</strong> {{ name }},
                <strong>Email:</strong> {{ email }} |
                <router-link :to="{ name: 'users.edit', params: { id } }">Edit</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            loading: false,
            users: null,
            error: null,
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.error = this.users = null;
            this.loading = true;
            axios
                .get('/api/users')
                .then(response => {
                    this.loading = false;
                    this.users = response.data.data;
                }).catch(error => {
                this.loading = false;
                this.error = error.response.data.message || error.message;
            });
        }
    }
}
</script>
