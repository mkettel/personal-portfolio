import Homepage from './Homepage'
import Portal from './Portal'
import { Link, Route, Switch } from 'wouter';
import { ThemeContext } from './ThemeContext';
import { useState, useEffect } from 'react';


export default function App() {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  return <>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="app">
        <Switch>
          <Route path="/" component={Homepage} />
          <Route path="/portal" component={Portal} />
        </Switch>
      </div>
    </ThemeContext.Provider>
  </>
}
