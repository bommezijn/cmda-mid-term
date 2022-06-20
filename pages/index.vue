<template>
  <div class="indexContainer">
    <ArticleSection pos="" :content="singleText" />
    <ArticleSection pos="imgLeft" img="/TestImage.jpeg" :content="singleText" />
    <ArticleSection
      pos="imgRight"
      img="/TestImage.jpeg"
      :content="singleText"
    />
    <ArticleSection pos="" img="/TestImage.jpeg" :content="test" />
    <QuoteComp />
    <CardSwitch />
    <PopupComponent />
    <TimeLineComp />
    <SummaryComponent />
  </div>
</template>

<script>

</script>
