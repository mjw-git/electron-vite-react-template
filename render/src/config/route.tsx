import TestPage from '@/pages/TestPage'
import TestPage2 from '@/pages/TestPage2'

const routes = [
  {
    name: 'index',
    path: '/test',
    component: <TestPage />,
  },
  {
    name: '测试页面2',
    path: '/test2',
    component: <TestPage2 />,
  },
]

export { routes }
