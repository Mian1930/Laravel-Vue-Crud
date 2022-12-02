<template>
    <div>
        <h3 class="text-center">Create Product</h3>
        <div class="row">
            <div class="col-md-6">
                <!-- <form action="" method="POST"> -->
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="product.name">
                    </div>
                    <div class="form-group">
                        <label>Detail</label>
                        <input type="text" class="form-control" v-model="product.detail">
                         <!-- <small >{{ error_detail }} </small> -->
                    </div>
                    <!-- this method is used on button when submitting a form with post method  when not using a form <> -->
                    <button type="submit"  @click.prevent="addProduct" method="POST" class="btn btn-primary mt-3">Create</button>
                <!-- </form> -->
            </div>
        </div>
    </div>
    <div>
        <!-- <h3 class="text-center">Edit Product</h3>
        <div class="row">
            <div class="col-md-6"> -->
                <!-- <form @submit.prevent="updateProduct"> -->
                    <!-- <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="product.name">
                    </div>
                    <div class="form-group">
                        <label>Detail</label>
                        <input type="text" class="form-control" v-model="product.detail">
                    </div>
                    <button type="submit" @submit.prevent="updateProduct" class="btn btn-primary mt-3">Update</button> -->
                <!-- </form> -->
            <!-- </div>
        </div>
    </div> -->
    </div>
      <!-- <div>
        <h2 class="text-center">Products List</h2>
 
        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Detail</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in products" :key="product.id">
                <td>{{ product.id }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.detail }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'editProduct', params: { id: product.id }}" class="btn btn-success"  :style="{marginRight:my}">Edit</router-link>
                        
                        <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div> -->
</template>
 
<script>
import axios from "axios";
    export default {
        data() {
            return {
                product: {},
                // my:"10px",
                // error_detail:'',
                // products:[]
                
            }
        },
         created() {
            // this.axios
                axios.get('/api/products/')
                .then(response => {
                    this.products = response.data;
                    // console.log(response)
                });
        },
        methods: {
            addProduct() {
                    axios.post('/api/products', this.product)
                    .then(response => (
                        console.log(response),
                        this.$router.push({ name: 'allproduct' }),
                        alert("product created")
                    ))
                    .catch(err =>{
                        //  this.error_detail = err.response.data.error_detail
//                           this.$notify({
//   error_detail: "error",
//   text: "Hello user!",
// });
            })
                    .finally(() => this.loading = false)
            },
            //  deleteProduct(id) { 
            //     this.axios
            //         axios.delete(`/api/products/${id}`)
            //         .then(response => {
            //             let i = this.products.map(data => data.id).indexOf(id);
            //             this.products.splice(i, 1)
            //         });
            // },
            // updateProduct(id) {
            //     this.axios
            //         axios.patch(`/api/products/ ${this.$route.params.id}`, this.product)
            //         .then((res) => {
            //             this.$router.push({ name: 'allproduct' });
            //         });
            // }
        }
        
        
    }
</script>