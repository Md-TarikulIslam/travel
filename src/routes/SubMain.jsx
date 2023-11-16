import DashboardNav from '../components/DashboardNav'
import { Outlet } from 'react-router-dom'

const SubMain = () => {
    return (
        <div>
            <DashboardNav />
           <div className='max-w-screen-md mx-auto pb-10'>
           <Outlet />
           </div>
        </div>
    )
}

export default SubMain