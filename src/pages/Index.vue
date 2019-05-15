<template>
  <q-page class="flex flex-center">

    <git-hub-corner/>

    <h1 class="title fit text-center q-mb-sm">Wishlist</h1>

    <q-list class="wishlist content-start" v-if="items.length">
      <wishlist-item v-for="(item, i) in items" :key="i" :item="item" :i="i" @delete="delete_item" @update="save_items"/>
    </q-list>

    <h2 v-else class="fit text-center q-display-1 text-weight-thin content-start">Your wishlist is empty! Click the Add button on the lower right corner or click <a href="javascript:;" style="text-decoration:none;" @click="add_item">here</a> to add a new item!</h2>

    <q-btn round color="primary" @click="add_item" class="fixed fab" icon="add"/>

  </q-page>
</template>

<script>
import WishlistItem from 'components/WishlistItem';
import GitHubCorner from 'components/GitHubCorner';


export default {
  name: 'PageIndex',
  components: {
    WishlistItem,
    GitHubCorner
  },
  data: () => ({
    items: []
  }),
  methods: {
    add_item() {
      this.$q.dialog({
        title: 'Wishlist',
        message: 'Please add your new item.',
        prompt: {
          model: '',
          type: 'text'
        },
        cancel: true,
        color: 'primary',
        ok: {
          label: 'Add'
        }
      }).then(item => {
        this.items.push({ text: item });
        this.save_items();
      }).catch(() => {

      })
    },
    delete_item(i) {
      if (this.items[i] === undefined)
        this.items = [];
      else
        this.items.splice(i, 1);

      this.save_items();
    },
    save_items() {
      this.$q.localStorage.set('nunogois_wishlist', this.items);
    }
  },
  mounted () {
    var app = this;

    window.addEventListener('keyup', function(e) {
      var originalElement = e.srcElement || e.originalTarget;
      if (e.keyCode === 13 && originalElement.tagName === 'BODY')
        app.add_item();
    })

    var items = this.$q.localStorage.get.item('nunogois_wishlist');
    if (items !== null)
      app.items = items;
  }
}
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Dancing+Script');

.title
  font-family 'Dancing Script', cursive;

.wishlist
  width 100%
  max-width 500px

.fab
  font-size 20px
  right 18px
  bottom 18px

.q-layout-page
  padding-bottom 80px

@media (min-width: 600px)
  .fab
    font-size 34px
    right 38px
    bottom 38px
    
  .q-layout-page
    padding-bottom 160px
</style>