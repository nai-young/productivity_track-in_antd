## Todo Component Structure

```
Todo/ (/todos)
├── AddTodo/
├── TodoList/
    ├── DeleteTodo (function)
EditTodo/ (/todos/edit/:todo_id)
```

***

## Application Complete Path

### # Todo Component

<span style="color: #dada">**Todo**</span> component get all todos and save it at the state -> Pass the { todos } variable from the state to the <span style="color: #dada">**TodoList**</span> component in the render.

Create <span style="color: #dada">**Delete**</span> function in <span style="color: #dada">**Todo**</span> component -> Pass it as prop to the <span style="color: #dada">**TodoList**</span> component (***removeTodo={ this.removeTodo }***)

Add the <span style="color: #dada">**AddTodo**</span> component to the render

&nbsp;

### # TodoList Component

<span style="color: #dada">**TodoList**</span> component recieves the todos and the remove function at props (***{todos, removeTodo}***)

**Map** the todos array and create a list which returns **todo.propierty**

To remove the todo when clicking, use the removeTodo() prop (
(***onClick={() => removeTodo(todo._id)}***)

&nbsp;

### # AddTodo Component

The <span style="color: #dada">**AddTodo**</span> (title field, select and button form) has a state with void properties (title and priority) that stores the new todo fields.

The two fields have an ***onChange=(this.onChangeTitle)*** atribute that pass the new field value to the state.

On submit, the handler ***onSubmit()*** creates an object with the new todo using the state content and post the object using ***axios.post***

&nbsp;

### # EditTodo Component

The <span style="color: #dada">**EditTodo**</span> component is called at ***/todos/edit/:todo_id*** and renders a form page to update the todo.

Mounts the component and get all todos to the state ('title', 'priority')

The two fields have an ***onChange=(this.onChangeTitle)*** atribute that pass the updated field value to the state.

On submit, the handler **onSubmit()** creates an object with the edited todo using the state content and update the object using **axios.put**

