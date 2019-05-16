<template>
  <q-page class="flex flex-center">

    <git-hub-corner/>

    <h1 class="title fit q-mb-sm">Wishlist</h1>

    <draggable tag="q-list" :list="items" :component-data="{attrs: {noBorder: true }}" class="wishlist" v-if="items.length">
      <wishlist-item v-for="(item, i) in items" :key="i" :item="item" :i="i" @delete="delete_item" @update="save_items"/>
    </draggable>

    <h2 v-else class="fit q-display-1 text-weight-thin content-start">Your wishlist is empty! Click the Add button on the lower right corner or click <a href="javascript:;" style="text-decoration:none;" @click="add_item">here</a> to add a new item!</h2>

    <q-fab class="fixed fab-left" color="primary" icon="menu" direction="up">
      <q-fab-action color="green" icon="check" @click="check_items">
        <q-tooltip anchor="center right" self="center left" :offset="[10, 0]">Check all items</q-tooltip>
      </q-fab-action>

      <q-fab-action color="red" icon="delete_sweep" @click="delete_items">
        <q-tooltip anchor="center right" self="center left" :offset="[10, 0]">Delete all items</q-tooltip>
      </q-fab-action>

      <install-app/>
    </q-fab>

    <q-btn round color="primary" @click="add_item" class="fixed fab-right" icon="add"/>

  </q-page>
</template>

<script>
import WishlistItem from 'components/WishlistItem';
import GitHubCorner from 'components/GitHubCorner';
import InstallApp from 'components/InstallApp';

import Draggable from 'vuedraggable';

export default {
  name: 'PageIndex',
  components: {
    WishlistItem,
    GitHubCorner,
    InstallApp,
    Draggable
  },
  data: () => ({
    items: [],
    loaded: false
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
        if (item !== '') {
          this.items.push({ text: item, check: false });
          this.save_items();
        }
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
    },
    check_items() {
      this.items.forEach(item => {
        item.check = true;
      });
      this.save_items();
    },
    delete_items() {
      this.$q.dialog({
        title: 'Wishlist',
        message: 'Are you sure you wish to delete all items?',
        cancel: true,
        color: 'primary',
        ok: {
          label: 'Delete',
          color: 'negative'
        }
      }).then(() => {
        this.items = [];
        this.save_items();
      }).catch(() => {

      })
    }
  },
  mounted () {
    var app = this;

    if (!app.loaded) {
      window.addEventListener('keyup', function(e) {
        var originalElement = e.srcElement || e.originalTarget;
        if (e.keyCode === 13 && originalElement.tagName === 'BODY')
          app.add_item();
      })

      var items = this.$q.localStorage.get.item('nunogois_wishlist');
      if (items !== null)
        app.items = items;

      app.loaded = true;
    }
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

.fab-left
  font-size 20px
  left 18px
  bottom 18px

.fab-right
  font-size 20px
  right 18px
  bottom 18px

.q-layout-page
  padding-bottom 80px
  text-align center

.q-item+.q-item:before
    content ""
    height 1px
    background linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(217, 217, 217, 1) 50%, rgba(0, 0, 0, 0) 100%)
    position absolute
    width 100%
    top 0

@media (min-width: 600px)
  .fab-left
    font-size 34px
    left 38px
    bottom 38px

  .fab-right
    font-size 34px
    right 38px
    bottom 38px
    
  .q-layout-page
    padding-bottom 160px
</style>