import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DashboardPage from "@/pages/DashboardPage.vue";
import UsersPage from "@/pages/users/UsersPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import WrapperPage from "@/pages/WrapperPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import AddBlogPage from "@/blogs/AddBlogPage.vue";
import EditBlogPage from "@/blogs/EditBlogPage.vue";

const routes: Array<RouteRecordRaw> = [
  {path: '/register', component: RegisterPage},
  {path: '/login', component: LoginPage},

  {
    path: '',
    component: WrapperPage,
    children: [
      {path: '/dashboard', component: DashboardPage},
      {path: '/users', component: UsersPage},
      {path : '/addblog', component: AddBlogPage},
      {path : '/editblog', component: EditBlogPage},
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
