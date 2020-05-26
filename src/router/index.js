import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import QuestionList from '@/components/QuestionList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/QuestionList',
      name: 'QuestionList',
      component: QuestionList
    }
  ]
})
