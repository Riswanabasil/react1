import React from "react";

import ReactDOM from "react-dom/client";

import Header from "./components/Header";

import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


import About from "./components/About";
import Contact from "./components/Contact"

import Error from "./components/Error";


// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React"
// );
// const jsxHeading = <h1 id="heading">"Hello world from JSX"</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const react= React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"I am an h1 tag")))

// const parent= React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"I am an h1 tag"),React.createElement("h2",{},"I am an h2 tag")]))

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "Hi"),
//     React.createElement("h2", {}, "I am an h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am an h1 tag"),
//     React.createElement("h2", {}, "I am an h2 tag"),
//   ]),
// ]);

// const Title=()=>(
//     <h1>component composition</h1>
// )

// const HeadingComponent=()=>(
//     <div id="container">
//     <Title/>
//      <h1>I am React component</h1>
//      </div>
// )
// root.render(<HeadingComponent/>);


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ]
    ,
    errorElement:<Error/>
  },
  // {
  //   path:"/about",
  //   element:<About/>
  // },
  // {
  //   path:"/contact us",
  //   element:<Contact/>
  // }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
