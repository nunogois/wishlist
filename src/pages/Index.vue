<template>
  <q-page class="flex flex-center">

    <q-list class="wishlist" v-if="items.length">
      <wishlist-item v-for="item in items" :key="item.id" :item="item" @delete="delete_item" @update="save_items"/>
    </q-list>

    <q-btn round color="primary" @click="add_item" class="fixed fab" icon="add"/>

  </q-page>
</template>

<script>
import WishlistItem from 'components/WishlistItem';

export default {
  name: 'PageIndex',
  components: {
    WishlistItem
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
        this.items.push({ id: this.items.length, text: item });
        this.save_items();
      }).catch(() => {

      })
    },
    delete_item(id) {      
      this.items.splice(id, 1);
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