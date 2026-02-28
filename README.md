It is a simple to-do list webpage that allows user add and delete to-do item. User can mark the task as completed. User can select the background of to-do item when he/she add it.
The to-do items is stored in React useState. That means thoes items will delete when user refresh or close the webpage.


open the terminal and go to the code folder. Enter command "npm run dev" and wait for a second. The webpage will be opened in a browser.

The default address is localhost and port number is 5173 (Url: http://localhost:5173)
The port number can be changed in the file package.json.


## The page
![start screen](/screenshoot/start_screen.png)

## select the background color of the item
![change the background color](/screenshoot/change_bg_color.png)

## click the button to add a new item
![add a new item](/screenshoot/added_a_item.png)

## tick the checkbox to mark a item as completed
![mark a item as completed](/screenshoot/mark_the_task_as_completed.png)


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
