

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### Features

- Generate 100 Users
- Search for User
- Add User (not fully implemented)
- Increase count on User (will not work well, still work to do)
- Delete User
- Timer before loading results? (why?) There is almost no good reason to use timers in JavaScript since it is single threaded and can only cause issues. DOM updating at each change is much better and even more efficient because of how React renders the DOM. (React only updates the changed tags in the DOM)
