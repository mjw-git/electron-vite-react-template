import { Link, Outlet } from 'react-router-dom'
import styles from './index.module.less'
import { routes } from '@/config/route'
const Layout = () => {
  return (
    <div>
      <div className={styles.container}>
        <nav className={styles.menu_container}>
          {routes.map((item) => (
            <div key={item.path}>
              <Link key={item.path} to={item.path}>
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <main className={styles.main_container}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
export default Layout
