<script setup>
// All Import File  Code Is Here......................................................................................................
const props = defineProps({
  title: String,
  description: String,
})

// All Variable  Code Is Here.....................................................................................................

// API Calling Code Is Here.....................................................................................................

// All Function  Code Is Here.....................................................................................................
</script>

<template>
  <div>
    <!--page header section start-->
        <section class="page-header-section ptb-100 gradient-overly-right" style="background: url(http://localhost:5174/src/assets/img/hero-14.jpg)no-repeat center center / cover">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-7 col-lg-6">
                        <div class="page-header-content text-white">
                            <h1 class="text-white mb-2">{{ title }}</h1>
                            <p class="lead">{{ description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--page header section end-->
  </div>
</template>

<style>

</style>
