// ---------------------------------------
// Model
// ---------------------------------------

class Todo {
    static nextId = 0;
    constructor(title) {
      Todo.nextId++;
      this.id = Todo.nextId;
      this.title = title;
      this.completed = false;
    }
    
  }
  
  // ---------------------------------------
  // Service
  // ---------------------------------------
  
  class TodoService {
     static todos=[];

    addTodo(title) { 
        let todo=new Todo(title);
        TodoService.todos.push(todo);
        
    }

    editTodo(id, newTitle) { 
      
         let todo= TodoService.todos.find(todo=>todo.id==id)
            todo.title=newTitle;
    }
    completeTodo(id) {
        let todo=TodoService.todos.find(todo=>todo.id==id)
        todo.completed=true;
    }
    completeAll() {
        if(TodoService.todos.some(todo=>todo.completed==false)){
            let unCompletedTodos= TodoService.todos.filter(todo=>todo.completed==false);
            if(unCompletedTodos.length!=0)
                unCompletedTodos.forEach(todo=>todo.completed=true);
        }
    }
    deleteTodo(id) {
        let toBedeletedTodo=TodoService.todos.findIndex(todo=>todo.id==id);
        TodoService.todos.splice(toBedeletedTodo,1);
    }
    clearCompleted() {
        let completedTodos=TodoService.todos.filter(todo=>todo.completed==true);
        completedTodos.forEach(todo=>TodoService.todos.splice(completedTodos.indexOf(todo),1));
    }
    viewTodos(flag) {
        if(flag==='ALL'){
            TodoService.todos.forEach(todo=>console.log(todo));
        }
        if(flag==='ACTIVE'){
           let active= TodoService.todos.filter(todo=>todo.completed=false)
           active.forEach(todo=>console.log(todo))
        }
        if(flag==='COMPLETED'){
            let completed= TodoService.todos.filter(todo=>todo.completed=true)
           completed.forEach(todo=>console.log(todo))
        }

       
    }
  }
  
  // ---------------------------------------
  
  const todoService = new TodoService();
  
   todoService.addTodo("item-1");
   todoService.addTodo("item-2");
   todoService.addTodo("item-3");
   todoService.addTodo("item-4");
   todoService.addTodo("item-5");
   todoService.addTodo("item-6");
   console.log("checking my to do list after adding 6 items...................");
   todoService.viewTodos('ALL');
  todoService.editTodo(2, "item-two");
  console.log("checking my to do list after editing item-2 as item-two...................");
  todoService.viewTodos('ALL');
  todoService.completeTodo(3);
  console.log("checking my to do list after completing items-3...................");
  todoService.viewTodos('ALL');
  console.log("checking my to do list after deleting  items-2...................");
  todoService.deleteTodo(2);
  todoService.viewTodos('ALL');
  todoService.completeAll();
  console.log("checking my to do list after completing all...................");
  todoService.viewTodos('ALL');
