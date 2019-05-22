import axios from 'axios'
import { LocalStorage } from "quasar";

export default ({ Vue }) => {
  let wishlist_axios = axios.create({
    baseURL: 'https://wishlist-quasar-api.herokuapp.com'    
  });

  let token = LocalStorage.get.item('nunogois_wishlist_token');
  if (token !== undefined)
    wishlist_axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

  Vue.prototype.$axios = wishlist_axios;
}