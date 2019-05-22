<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  meta: {
    meta: {
      keywords: { name: 'keywords', content: 'Wishlist' },
      og_title: { prefix: 'og: http://ogp.me/ns#', property: 'og:title', content: 'Wishlist' },
      og_website: { prefix: 'og: http://ogp.me/ns# website: http://ogp.me/ns/website#', property: 'og:type', content: 'website' },
      og_description: { prefix: 'og: http://ogp.me/ns#', property: 'og:description', content: 'Wishlist' },
      og_image: { prefix: 'og: http://ogp.me/ns#', property: 'og:image', content: 'https://wishlist-quasar.netlify.com/thumbnail.png' },
      og_url: { prefix: 'og: http://ogp.me/ns#', property: 'og:url', content: 'https://wishlist-quasar.netlify.com/' },
      twitter_card: { name: 'twitter:card', content: 'summary_large_image' },
      theme_color: { name: 'theme-color', content: '#000000'}
    }
  }
}
</script>

<style>
</style>
