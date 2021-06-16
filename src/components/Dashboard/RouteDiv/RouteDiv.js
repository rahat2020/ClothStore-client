import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AddAdmin from "../AddAdmin/AddAdmin";
import AddProducts from "../AddProducts/AddProducts";
import AddReviews from "../AddReviews/AddReviews";
const RouteDiv = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path= {`${path}/addReview`} >
          <AddReviews></AddReviews>
        </Route>
        <Route path={`${path}/addProducts`}>
          <AddProducts></AddProducts>
        </Route>
        <Route path={`${path}/admin`}>
          <AddAdmin></AddAdmin>
        </Route>
      </Switch>
    </div>
  );
};

export default RouteDiv;
