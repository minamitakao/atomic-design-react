import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Top } from '../components/pages/Top';
import { Users } from '../components/pages/Users';
import { HeaderOnlyLayout} from '../components/templates/HeaderOnlyLayout';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HeaderOnlyLayout>
            <Top />
          </HeaderOnlyLayout>
        </Route>
        <Route path="/users">
          <HeaderOnlyLayout>
            <Users />
          </HeaderOnlyLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}