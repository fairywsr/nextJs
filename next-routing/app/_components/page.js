import React from "react";

export default function component() {
  // -----------Private folder--------
  // 1-- if we create folder component inside app folder and in which create app.js file it will become route in next js. To prevent route we use _component folder name.. called private folder in next js
  // 2-- in some case if we want _component route with page.js we can name the %5Fcomponent for _component route
  // 3-- create component folder out side the app folder this folder will become independent from routes
  return <div>Component page</div>;
}
