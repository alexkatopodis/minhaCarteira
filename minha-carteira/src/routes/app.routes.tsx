import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';
import Cep from '../pages/Cep';


const AppRoutes: React.FC = () => (
   <Layout>
     <Switch>
         <Route path="/dasboard" exact component = {Dashboard} />
         <Route path="/list/:type" exact component = {List} />
         <Route path="/cep" exact component = {Cep} />
     </Switch>
   </Layout>
);

export default AppRoutes;
