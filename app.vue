<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup >
var hostUrl = "https://preview.keenthemes.com/metronic8/demo32/assets/";
  const scripts = [
    'https://preview.keenthemes.com/metronic8/demo32/assets/plugins/global/plugins.bundle.js',
    'https://preview.keenthemes.com/metronic8/demo32/assets/js/scripts.bundle.js',
  ];
  scripts.forEach(script => {
    let tag = document.createElement('script');
    tag.setAttribute('src', script);
    document.body.appendChild(tag)
  })
</script>