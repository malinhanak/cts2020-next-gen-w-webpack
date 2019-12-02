import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Loading } from './components/Loading';

const Home = React.lazy(() => import('./views/Home'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" render={() => 'Path Not Found'} />
      </Switch>
    </Suspense>
  );
}

export default App;
