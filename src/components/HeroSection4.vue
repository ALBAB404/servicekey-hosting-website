<script setup>
// All Import File  Code Is Here......................................................................................................


// All Variable  Code Is Here.....................................................................................................

// API Calling Code Is Here.....................................................................................................

// All Function  Code Is Here.....................................................................................................
</script>

<template>
  <div>
     <!--hero section start-->
        <section class="hero-equal-height section-xl section-header background-video-overly text-white flex-column d-flex justify-content-center">
            <video class="fit-cover w-100 h-100 position-absolute z--1" autoplay muted loop id="myVideo">
                <source src="https://hostlar.themetags.com/server-room.mp4" type="video/mp4">
            </video>
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-md-9 col-lg-8">
                        <div class="hero-content-left text-white text-center">
                            <h1 class="text-white">Choose Best Domain Name and Create Your Website</h1>
                            <p class="lead">Up to 50% Off domain and hosting, Starting from $2.99/month, free SSL certificate, 24/7/365 support, money back guarantee.</p>
                            <form action="domain-search-result.php" class="domain-search-form mt-3 w-75  mx-auto">
                                <div class="input-group">
                                    <input type="text" name="domain" id="domain" class="form-control" placeholder="example.com" />
                                    <div class="input-group-append">
                                        <button class="btn search-btn btn-hover d-flex align-items-center" type="submit">
                                            <span class="ti-search mr-2"></span> Search
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div class="domain-list-wrap mt-4">
                                <ul class="list-inline domain-search-list text-white">
                                    <li class="list-inline-item"><a href="#"><img src="@/assets/img/com-w.png" alt="com" width="70" class="img-fluid" /> <span>$8.99</span></a></li>
                                    <li class="list-inline-item"><a href="#"><img src="@/assets/img/net-w.png" alt="com" width="70" class="img-fluid" /> <span>$4.99</span></a></li>
                                    <li class="list-inline-item"><a href="#"><img src="@/assets/img/org-w.png" alt="com" width="70" class="img-fluid" /> <span>$2.99</span></a></li>
                                    <li class="list-inline-item"><a href="#"><img src="@/assets/img/store-w.png" alt="com" width="70" class="img-fluid" /> <span>$0.99</span></a></li>
                                    <li class="list-inline-item"><a href="#"><img src="@/assets/img/online-w.png" alt="com" width="70" class="img-fluid" /> <span>$0.99</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--hero section end-->
  </div>
</template>

<style>

</style>
