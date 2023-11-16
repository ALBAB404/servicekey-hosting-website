<script setup>
// All Import File  Code Is Here......................................................................................................


// All Variable  Code Is Here.....................................................................................................

// API Calling Code Is Here.....................................................................................................

// All Function  Code Is Here.....................................................................................................
</script>

<template>
    <div>
         <section
        class="hero-equal-height ptb-100 gradient-overlay gradient-bg"
        style="
          background: url('assets/img/hero-bg-2.jpg') no-repeat center center /
            cover;
        "
      >
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-lg-6 col-12">
              <div class="hero-content-wrap text-white">
                <h1 class="text-white">
                  HostLar Best Hosting Provider in World
                </h1>
                <p class="lead">
                  If your WordPress website is your personal business, we want
                  you to succeed. We made our Hostlar hosting & domain service
                  provider platform.
                </p>
                <form
                  action="domain-search-result.php"
                  class="domain-search-form mt-3"
                >
                  <div class="input-group">
                    <input
                      type="text"
                      name="domain"
                      id="domain"
                      class="form-control"
                      placeholder="example.com"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn search-btn btn-hover d-flex align-items-center"
                        type="submit"
                      >
                        <span class="ti-search mr-2"></span> Search
                      </button>
                    </div>
                  </div>
                </form>
                <div class="domain-list-wrap mt-4">
                  <ul class="list-inline domain-search-list text-white">
                    <li class="list-inline-item">
                      <a href="#"
                        ><img
                          src="@/assets/img/com-w.png"
                          alt="com"
                          width="75"
                          class="img-fluid"
                        />
                        <span>$8.99</span></a
                      >
                    </li>
                    <li class="list-inline-item">
                      <a href="#"
                        ><img
                          src="@/assets/img/net-w.png"
                          alt="com"
                          width="75"
                          class="img-fluid"
                        />
                        <span>$4.99</span></a
                      >
                    </li>
                    <li class="list-inline-item">
                      <a href="#"
                        ><img
                          src="@/assets/img/org-w.png"
                          alt="com"
                          width="75"
                          class="img-fluid"
                        />
                        <span>$2.99</span></a
                      >
                    </li>
                    <li class="list-inline-item">
                      <a href="#"
                        ><img
                          src="@/assets/img/store-w.png"
                          alt="com"
                          width="75"
                          class="img-fluid"
                        />
                        <span>$0.99</span></a
                      >
                    </li>
                    <li class="list-inline-item">
                      <a href="#"
                        ><img
                          src="@/assets/img/online-w.png"
                          alt="com"
                          width="75"
                          class="img-fluid"
                        />
                        <span>$0.99</span></a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-12">
              <div class="animation-image-wrap">
                <img
                  src="@/assets/img/servers.svg"
                  alt="wp hosting"
                  class="img-fluid"
                />
                <img
                  src="@/assets/img/animated-icon-1.png"
                  alt="wp hosting"
                  class="animation-icon-img animation-icon-1"
                />
                <img
                  src="@/assets/img/animated-icon-2.png"
                  alt="wp hosting"
                  class="animation-icon-img animation-icon-2"
                />
                <img
                  src="@/assets/img/animated-icon-3.png"
                  alt="wp hosting"
                  class="animation-icon-img animation-icon-3"
                />
                <img
                  src="@/assets/img/animated-icon-4.png"
                  alt="wp hosting"
                  class="animation-icon-img animation-icon-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<style>

</style>
