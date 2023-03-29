import { createStore } from 'vuex'

import menu from './modules/menu'
import active_dish from './modules/menu/acitve_dish'

import cart from './modules/cart'

import modals from './modules/modals'

import languages from './modules/languages'

import api_url from './modules/api_url'


export default createStore({
  modules: {
    menu,

    cart,

    languages,

    modals,

    api_url,
    active_dish,
  }
});
