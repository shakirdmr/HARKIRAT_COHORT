import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ReactMemo from './pages/ReactMemo';
import Todo from './pages/Todo';
import WraperComponent from './pages/WraperComponent';
import UseEffectImproved from './pages/UseEffectImproved.jsx';
import UseEffectt from './pages/UseEffect.jsx';
import UseCallback from './pages/UseCallback.jsx';
import UseMemo from './pages/UseMemo.jsx';

const App = () => {
  return (
    
    <BrowserRouter>

      <Routes>

        <Route path='/' element={ <ReactMemo/> } />
        <Route path='/todo' element={<Todo />} />
        <Route path='/wrapper' element={<WraperComponent />} />
        <Route path='/useeffect' element={<UseEffectt /> } />
        <Route path='/useeffect-improved' element={<UseEffectImproved />} />
        <Route path='/usecallback' element={<UseCallback />} />
        <Route path='/usememo' element={<UseMemo />} />
        {/* <Route path='/' element={} /> */}
        {/* <Route path='/' element={} /> */}
        {/* <Route path='/' element={} /> */}

      </Routes>

    </BrowserRouter>

  )
}

export default App