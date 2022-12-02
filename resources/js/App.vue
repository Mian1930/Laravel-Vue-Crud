<template>
    <div class="container"> 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <router-link to="/" class="nav-item nav-link">Products List</router-link>
                    <router-link to="/createProduct" class="nav-item nav-link">Create Product</router-link>
                     <router-link to="/editProduct" class="nav-item nav-link">Edit Product</router-link>
                      <router-link to="/allproduct" class="nav-item nav-link">All Product</router-link>
                </div>
            </div>
        </nav>
        <router-view> </router-view>
    </div>
</template>
 
<script>
    export default {}
</script>