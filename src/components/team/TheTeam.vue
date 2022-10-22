<template>
    <div>
        <h1 class="mt-4 mb-4"><span id="guillemet">»</span> Unser Team</h1>
        <div class="d-flex justify-content-center flex-wrap">
            <div v-for="teamMember in teamMembers" :key="teamMember.id" class="mx-2">
                <div v-if="teamMember.id <= 5" class="card shadow p-3 mb-5 rounded" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{ teamMember.first_name + ' ' + teamMember.last_name }}</h5>
                        <h6 class="card-subtitle mb-2">{{ teamMember.email }}</h6>
                        <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            teamMembers: [],
        }
    },
    mounted() {
        axios
            .get('https://reqres.in/api/users')
            .then(response => (
                this.teamMembers = Array.from(response.data.data)))
            .catch(error => console.log(error));
        
        console.log(this.teamMembers, typeof this.teamMembers);
    }
}
</script>

<style scoped>

    .card:hover {
        background-color: #990000;
        color: white;
    }

</style>