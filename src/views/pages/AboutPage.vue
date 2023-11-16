<script setup>
// All Import File  Code Is Here......................................................................................................
import {
  PageHeaderSection,
  BreadcrumbBar,
  FeatureSection,
  ServiceSection2,
  MapSection,
  CallToActionSection2,
  TeamMember,
  TestimonialSection,
} from "@/components";

// All Variable  Code Is Here.....................................................................................................

// API Calling Code Is Here.....................................................................................................

// All Function  Code Is Here.....................................................................................................
</script>

<template>
  <div class="main">
    <!--page header section start-->
      <PageHeaderSection title="About Us" description="Compellingly conceptualize ubiquitous methodologies and progressive total linkage. Credibly reconceptualize enabled models after open-source applications."/>
    <!--page header section end-->

        <!--breadcrumb bar start-->
       <BreadcrumbBar paginateBreadcamp="About"/>
        <!--breadcrumb bar end-->

        <!--feature section tab style start-->
        <ServiceSection2 />
        <!--feature section tab style end-->

        <!--network map section start-->
       <MapSection />
        <!--network map section end-->

        <!--call to action section start-->
       <CallToActionSection2 />
        <!--call to action section end-->

        <!--feature section start-->
       <FeatureSection />
        <!--feature section end-->

        <!--meet our team carousel style start-->
        <TeamMember />
        <!--meet our team carousel style end-->

        <!--testimonial and review section start-->
        <TestimonialSection />
        <!--testimonial and review section end-->
    </div>
</template>

<style>

</style>
