<template>
  <q-card class="q-mx-md q-mt-sm" dense v-if="show_install">
    <q-card-main>
      Would you like to install Wishlist?
      <q-btn class="on-right" dense label="Install" flat color="primary" @click.prevent="install"/>
      <div class="install-separator"></div>
      <q-btn label="Dismiss" dense flat @click="show_install = false"/>
    </q-card-main>
  </q-card>
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

.install-separator
  height 10px
  width 1px
  background-color black
  display inline-block
  margin-left 5px
  margin-right 5px

</style>