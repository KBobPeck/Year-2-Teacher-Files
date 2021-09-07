import { Route, Switch } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import { links } from "./util/consts";
import Modal from "./Components/Modal";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {links
          .filter((link) => link.text !== "home")
          .map((link) => {
            const {id, url, page } = link;
            return <Route key={id} path={url}>{page}</Route>;
          })}
      </Switch>
      <Sidebar />
      <Modal />
    </>
  );
}

export default App;
