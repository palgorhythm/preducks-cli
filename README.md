![preduck](https://raw.githubusercontent.com/palgorhythm/preducks-web/master/preducks-logo-text.svg?sanitize=true)

**preducks** is a prototyping tool for developers building **React**/**Redux**/**TypeScript** applications. This is the CLI version of the desktop/web app!
You can export a full customized boilerplate using only the **preducks** CLI and a JSON config!

## getting started

```
npm i -g preducks
```

run without config (outputs default boilerplate):

```
preducks
```

run with JSON config file:

```
preducks [PATH_TO_CONFIG]
```

open up the exported app in your editor of choice.
to start the exported app for the first time (runs npm install and npm run dev):

```
npm run begin
```

and every time after that:

```
npm run dev
```

## config structure

the expected structure of the config JSON file is as follows:

```JSON
{
  "appName": "[YOUR_APP_NAME]",
  "interfaces": {
    "[INTERFACE_NAME]": {
      "[FIELD_NAME]": "[FIELD_TYPE]",
      "[OTHER_FIELD_NAME]": "[OTHER_FIELD_TYPE]"
    }
  },
  "reducers": {
    "[REDUCER_NAME]": {
      "store": {
        "[STORE_SLICE_NAME]": {
          "type": "[TYPE]",
          "array": "[BOOLEAN]",
          "initialValue": "[INITIAL_VALUE]"
        }
      },
      "actions": {
        "[ACTION_NAME]": {
          "parameter": {
            "name": "[NAME]",
            "type": "[TYPE]",
            "array": "[BOOLEAN]"
          },
          "payload": { "type": "[TYPE]", "array": "[BOOLEAN]" },
          "async": "[BOOLEAN]"
        }
      }
    }
  }
}
```

you can specify multiple interfaces in the interfaces object, multiple reducers in the reducers object, as well as multiple store slices and actions per reducer.

here's an example config that outputs the boilerplate for a todo app:

```JSON
{
  "interfaces": {
    "todo": { "id": "number", "title": "string", "completed": "boolean" }
  },
  "reducers": {
    "todos": {
      "store": {
        "todoArray": { "type": "todo", "array": true, "initialValue": [] },
        "allCompleted": {
          "type": "boolean",
          "array": false,
          "initialValue": false
        }
      },
      "actions": {
        "fetchTodos": {
          "parameter": { "name": "", "type": "", "array": false },
          "payload": { "type": "todo", "array": true },
          "async": true
        },
        "deleteTodo": {
          "parameter": { "name": "id", "type": "number", "array": false },
          "payload": { "type": "number", "array": false },
          "async": "false"
        }
      }
    }
  }
}
```

## contributors

- [max gonzalez](https://github.com/maximiliangonzalez)
- [will napier](https://github.com/willnap)
- [jacob richards](https://github.com/palgorhythm)

## license

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/oslabs-beta/preducks/blob/development/LICENSE.md) file for details.
