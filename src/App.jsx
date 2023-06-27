import Homepage from './Homepage'
import Portal from './Portal'
import { Link, Route, Switch } from 'wouter';


export default function App() {


  return <>
    <div className="app">
      <Switch>
        <Route path="/" component={Homepage} />
        <Route path="/example" component={Portal} />
      </Switch>
    </div>
  </>
}
