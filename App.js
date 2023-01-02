import React from "react";
import ReactDOM  from "react-dom/client";

/// Assignment 1- part a -- JS to manipulate DOM
        // const heading1 =document.createElement("h1");
        // heading1.innerHTML="Hello world from Javascript!"; 
        // const root1= document.getElementById("root");

        // root1.appendChild(heading1);


// Assignment 1- part b --Using React


    const heading = React.createElement("h1",{
        id:"title",
    },"Namaste Everyone!");
    
    const heading2 = React.createElement("h2",{
id:"title1",
    },"Namaste heading 2");

    const container =React.createElement("div",{id:"container"},heading,heading2)

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(container);

