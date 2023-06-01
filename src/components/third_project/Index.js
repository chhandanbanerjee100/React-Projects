// import DropdownPage from "./pages/DropdownPage"
// import ButtonPage from "./pages/ButtonPage";
// import AccordionPage from "./pages/AccordionPage";
import Sidebar  from './atoms/Sidebar';
import Route from './atoms/Route';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';
function Index() {

  return(
    // <DropdownPage /><ello></ello>
    // <AccordionPage />
    <div className='text-2xl container mx-auto grid grid-cols-6 gap-4 mt-4'>
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
  )
}

export default Index
