<template>
  <q-item link :class="item.check ? 'item_checked' : ''" tag="label">
    <q-item-side left>
      <q-checkbox v-model="item.check" color="green" @input="$emit('update');"/>
    </q-item-side>
    <q-item-main>
      <q-input v-if="item_edit" v-model="item.text" ref="item_text" autofocus @focus="$refs.item_text.select()" @keyup.enter="item_edit = false"/>
      <div v-else :style="item.check ? 'text-decoration: line-through; color: green' : ''">{{ item.text }}</div>
    </q-item-main>
    <q-item-side right>
      <q-btn :icon="item_edit ? 'check' : 'edit'" :color="item_edit ? 'green' : 'orange'" flat @click="item_edit = !item_edit">
        <q-tooltip :disable="$q.platform.is.mobile">
          Edit
        </q-tooltip>
      </q-btn>
      <q-btn icon="delete" color="negative" flat @click="delete_item(i)">
        <q-tooltip :disable="$q.platform.is.mobile">
          Delete
        </q-tooltip>
      </q-btn>
    </q-item-side>
  </q-item>
</template>

<script>
export default {
  props: ['item', 'i'],
  data: () => ({
    item_edit: false
  }),
  watch: {
    item_edit: function(newValue) {
      if (!newValue)
        this.$emit('update');
    }
  },
  methods: {
    delete_item (i) {
      this.$q.dialog({
        title: 'Wishlist',
        message: 'Are you sure you wish to delete "' + this.item.text + '"?',
        cancel: true,
        color: 'primary',
        ok: {
          label: 'Delete',
          color: 'negative'
        }
      }).then(() => {
        this.$emit('delete', i);
      }).catch(() => {

      })
    }
  }
}
</script>

<style lang="stylus">

.item_checked
  background-color #f7f7f7

</style>