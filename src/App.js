import { Redirect, Route, Switch } from "react-router";
import Header from "./components/header";
import Main from "./components/main";
import Articles from "./components/articles";
import About from "./components/about";
import NotFound from "./components/notFound";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/articles/:articleId?" component={Articles} />
        <Route path="/about" component={About} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </>
  );
}

export default App;
