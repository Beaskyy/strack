import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Strack React Admin Template'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  {
    path: "/home",
    component: lazy(() => import("../../views/Home"))
  },
  {
    path: "/project",
    component: lazy(() => import("../../views/Project"))
  },
  {
    path: "/profile",
    component: lazy(() => import("../../views/Profile"))
  },
  {
    path: "/forgot-password",
    component: lazy(() => import("../../views/ForgotPassword")),
    layout: "BlankLayout"
  },
  {
    path: "/register",
    component: lazy(() => import("../../views/Register")),
    layout: "BlankLayout"
  },
  {
    path: "/login",
    component: lazy(() => import("../../views/Login")),
    layout: "BlankLayout",
    meta: {
      authRoute: true
    }
  },
  {
    path: "/error",
    component: lazy(() => import("../../views/Error")),
    layout: "BlankLayout"
  },
  {
    path: "/pricing",
    component: lazy(() => import("../../views/components/pages/pricing")),
    layout: "BlankLayout"
  }
]

export { DefaultRoute, TemplateTitle, Routes }
