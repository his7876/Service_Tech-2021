import Header from "./component/Header";
import EventExample from "./component/EventExample";
import ListComponent from "./component/ListComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AxiosTest from "./pages/AxiosTest";
import NewsSearch from "./pages/NewsSearch";
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
      </Switch>
    </Router>
  );
}

export default App;