
import { Outlet } from 'react-router'
import './App.css'
import CommonLayout from './components/layouts/CommonLayout'

function App() {
  
  return (
    <>
      <CommonLayout>
        <Outlet></Outlet>
      </CommonLayout>
    </>
  );
}

export default App
