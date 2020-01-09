# youritdepartment
 
### TODO
1. Figure out react-routes
2. Make home page with 2 options that animate through choices and final price at the end


## React Router

### Installation

- npm install react-router-dom --save

### Usage 

- You need to wrap your main app with <Router>
- imports:
```import Route from 'react-router-dom/Route```
```js
<Route path="/" render={
    () => {
        return (<h1>Welcome home</h1>)
    }
}/>
```