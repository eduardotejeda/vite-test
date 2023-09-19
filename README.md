# React + Vite

Testig how **React** work with **Vite** and HMR and some ESLint rules.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

## Installation

Vite requiere Node.js version ^14.18+

```bash
$ Node.js hhttps://nodejs.org/en/download
$ cd yourproject
$ npm create vite@latest
$ npm run dev
```

## Usage

- After `npm run dev` open browser localhost. 
- The parent file, App.jsx, is where all of the children are displayed. 
- To close use Ctrl+C.

```
import './App.css'
import Chicken from "./Chicken"
import Greeter from "./Greeter"
import Die from "./Die"
import ListPicker from "./ListPicker"
import DoubleDice from "./DoubleDice"
import ShoppingList from "./ShoppingList";


const data = [
  {item: "egg", quantity:12, completed:false},
  {item: "milk", quantity:1, completed:true},
  {item: "chicken breasts", quantity:4, completed:false},
  {item: "carrots", quantity:6, completed:true}
];

function App() {  
   return(
    <div> 
      <ShoppingList items={data}/>
      
      
        </div>
   ) 
}

export default App
```

## Features

1. Display a simple to-do-list.
2. Using a tenary operator, change the color based on completion.

## License

This project is licensed under the MIT License.
