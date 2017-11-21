Media Cloud React Redux Flask Example
=====================================

An example of the complicated architectures involved in modern JS development.  This example is built on top of [one of the numerous Boilerplates](https://github.com/dternyak/React-Redux-Flask) that are available for getting started with React. There are lots of others.

Some tutorials to keep in mind:
 * [Intro to React](https://reactjs.org/tutorial/tutorial.html#getting-started)
 * [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)


Install
-------

Install the Python requirements
```shell
$ virtualenv venv
$ pip install -r requirements
```

Create a local database (only need to do this once).  Use sqlite for simplicity:
```shell
$ export DATABASE_URL="sqlite:///mediacloud.db"
$ python manage.py create_db
```

Set your Media Cloud API KEY:
```shell
$ export MC_API_KEY="YOUR_LONG_KEY"
```

And also install the node pacakges:
```shell
$ cd static
$ npm install
```

And add the useful React and Redux developer extensions to Chrome:
* [React Developer Tools Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
* [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)


Environment Variables
---------------------

As noted above, there are two environment variables that you have to define:
```shell
$ export MC_API_KEY="YOUR_LONG_KEY"
$ export DATABASE_URL="sqlite:///mediacloud.db"
```

Without these defined in your terminal window the app won't run correctly.  You'll need to set these any time you open a new terminal window.


Running this Example
--------------------

You need to start the Python server back-end:
```shell
$ python manage.py runserver
```

And in a separate terminal you need to run the Javascript front-end:
```sh
$ cd static
$ npm start
```

Then visit `http://localhost:3000` and you should see the app in your browser!
