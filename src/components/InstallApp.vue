<template>
  <q-fab-action v-if="show_install" color="blue" icon="get_app" @click="install">
    <q-tooltip anchor="center right" self="center left" :offset="[10, 0]">Install Wishlist</q-tooltip>
  </q-fab-action>
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