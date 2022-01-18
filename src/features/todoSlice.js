import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const [todoList,setTodoList]=useState([]); initialise an empty array
//the todoList is the current state and the action.payload is the setTodoList
const initialState = {
    todoList:[]

}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        // state is the current state of the saveTodo and the action is actually the function thats going to be executed it will have the payload
        saveTodo:(state,action)=>{
            state.todoList.push(action.payload)

        },
        setCheck:(state,action)=>{

            state.todoList.map( item => {
                if(action.payload === item.id){ 
                    if(item.done===true){
                        item.done=false;
                    }
                    else{
                        item.done=true;
                    }
                }
            }
            )
        },
       // deleteTask: (state, action)=>{
       //     return state.todoList.filter((item) => item.id !== action.payload.id);
       // }
       

       deleteTask:(state, action )=> {
            const index = state.todoList.findIndex((todo) => todo.id === action.payload);
            state.todoList.splice(index, 1);
          },
    
    }
});
export const { saveTodo, setCheck , deleteTask } = todoSlice.actions
export const selectTodolist= state =>state.todos.todoList

export default todoSlice.reducer