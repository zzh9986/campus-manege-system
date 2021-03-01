import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Register from '@/components/register'
import Student from '@/components/student'
import Teacher from '@/components/teacher'
import Absence from '@/components/studentSide/absence'
import Record from '@/components/studentSide/record'
import Notice from '@/components/studentSide/notice'
import SendNotice from '@/components/teacherSide/sendNotice'
import AbsenceDetail from '@/components/teacherSide/absenceDetail'
import RecordDetail from '@/components/teacherSide/recordDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/student',
      name: 'student',
      component: Student,
      redirect: {
        name: 'record'
      },
      children:
      [
        {
          path: '/',
          name: 'record',
          component: Record
        },
        {
          path: 'absence',
          name: 'absence',
          component: Absence
        },
        {
          path: 'notice',
          name: 'notice',
          component: Notice
        }
      ]
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: Teacher
    },
    {
      path: '/send_notice',
      name: 'send',
      component: SendNotice
    },
    {
      path: '/absence_detail',
      name: 'takeoff',
      component: AbsenceDetail
    },
    {
      path: '/record_detail',
      name: 'location',
      component: RecordDetail
    }
  ]
})
