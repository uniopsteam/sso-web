import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Form, FormItem, Input, Message} from 'element-ui'
import {Carousel, CarouselItem} from 'element-ui'
import {Menu, MenuItem} from 'element-ui'
import { Dropdown, DropdownMenu } from 'element-ui'
import {Container, Header, Main, Footer, Aside } from  'element-ui'



Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Aside)
Vue.prototype.$message = Message