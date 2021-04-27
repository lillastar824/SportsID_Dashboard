import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./mainscreens/dashboard";
import Stats from "./mainscreens/stats";
import Newsfeed from "./mainscreens/newsfeed";
import Tracking from "./mainscreens/tracking";
import Calendar from './mainscreens/calendar';
import Contacts from './mainscreens/contacts';
import Endorsements from './mainscreens/endorsements';




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
