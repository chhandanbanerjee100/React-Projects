import './App.css';

import Sidebar  from './components/third_project/atoms/Sidebar';
import Route from './components/third_project/atoms/Route';
import AccordionPage from './components/third_project/pages/AccordionPage';
import DropdownPage from './components/third_project/pages/DropdownPage';
import ButtonPage from './components/third_project/pages/ButtonPage';
import ModalPage from './components/third_project/pages/ModalPage';
import TablePage from './components/third_project/pages/TablePage';

function App() {
  return (
    <div className='text-2xl container mx-auto grid grid-cols-6 gap-4 mt-4'>
      {/* <Api_Project /> */}
      {/* <BookProject /> */}
      {/* <Index /> */}
      <Sidebar />

      <div className='col-span-5'>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
      </div>
    </div>
  );
}

export default App;
