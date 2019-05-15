<template>

  <q-dialog v-model="show_install" class="dialog_install" position="top" @ok="install">
    <span slot="title">Wishlist</span>
    <span slot="message">Would you like to install Wishlist?</span>

    <template slot="buttons" slot-scope="props">
      <q-btn flat label="No, thanks" @click="props.cancel" />
      <q-btn color="primary" label="Install" @click="props.ok" />                                
    </template>
  </q-dialog>
</template>

<script>
let installEvent;

export default {
  data() {
    return {
      show_install: false
    };
  },
  created() {
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      installEvent = e;
      this.show_install = true;
    });
  },
  methods: {
    install() {
      this.show_install = false;
      installEvent.prompt();
      installEvent.userChoice.then(() => {
        installEvent = null;
      });
    }
  }
};
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Dancing+Script');

.install-separator
  height 10px
  width 1px
  background-color black
  display inline-block
  margin-left 5px
  margin-right 5px

.dialog_install .modal-content
  margin-top 20px

.dialog_install .modal-header
  font-family 'Dancing Script', cursive;

</style>