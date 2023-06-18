import MainPage from './src/views/MainPage.vue'
import PhotoGallery from './src/views/PhotoGallery.vue'
import ProductsPage from './src/views/ProductsPage.vue'
import PrivacyPage from './src/views/PrivacyPage.vue'
import AboutUs from './src/views/AboutUs.vue'

const routes = [
  {
    path: '/',
    name: 'mainPage',
    component: MainPage
  },
  {
    path: '/photoGallery',
    name: 'photoGallery',
    component: PhotoGallery
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsPage
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    component: AboutUs
  },
  {
    path: '/privacy',
    name: 'PrivacyPage',
    component: PrivacyPage
  }
];

export default routes;