<template>
  <q-card class="q-mx-md q-mt-sm" dense v-if="show_install">
    <q-card-main>
      Would you like to install Wishlist?
      <q-btn class="on-right" dense label="Install" flat color="primary" @click.prevent="install"/>
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