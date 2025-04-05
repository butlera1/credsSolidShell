/* @refresh reload */
import { render } from 'solid-js/web';
import { App } from './App';
import { Hello } from './Hello';
import { Meteor } from "meteor/meteor";
import { Router, Route } from "@solidjs/router";

Meteor.startup(() => {
  const wrapper = document.getElementById("root");
  if (!wrapper) {
    throw new Error("Wrapper div not found");
  }

  // render(() => <App />, wrapper);
  render(() =>
    <Router>
      <Route path="/" component={App} />
      <Route path="/hello" component={Hello} />
    </Router>,
    wrapper);

})




