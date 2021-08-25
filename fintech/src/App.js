import Header from "./component/Header";
import EventExample from "./component/etc/EventExample";
import ListComponent from "./component/etc/ListComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AxiosTest from "./pages/AxiosTest";
import NewsSearch from "./pages/NewsSearch";
import AddUser from "./pages/AddUser";
import AuthResult from "./pages/AuthResult";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test" exact>
          <Header title = "테스트페이지1"></Header>
          <EventExample></EventExample>
        </Route>
        <Route path="/test2" exact>
          <Header title = "테스트페이지2"></Header>
          <ListComponent></ListComponent>
        </Route>
        <Route path="/axios" exact>
          <AxiosTest> </AxiosTest>
        </Route>
        <Route path="/news" exact>
          <NewsSearch> </NewsSearch>
        </Route>
        <Route path="/addUser" exact>
          <AddUser> </AddUser>
        </Route>
        <Route path="/authResult" exact>
          <AuthResult> </AuthResult>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;