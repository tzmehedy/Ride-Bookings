
import { Outlet } from 'react-router'
import './App.css'
import CommonLayout from './components/layouts/CommonLayout'

function App() {
  return (
    <div >
      <CommonLayout>
        <Outlet></Outlet>
      </CommonLayout>
    </div>
  );
}

export default App
