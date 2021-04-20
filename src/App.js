import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Stats from "./components/stats";
import Newsfeed from "./components/newsfeed";
import Tracking from "./components/tracking";
import Calendar from './components/calendar';
import Contacts from './components/contacts';
import Endorsements from './components/endorsements';




function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/newsfeed" component={Newsfeed} />
        <Route path="/stats" component={Stats} />
        <Route path="/tracking" component={Tracking} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/endorsements" component={Endorsements} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
