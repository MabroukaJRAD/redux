import { createSlice } from '@reduxjs/toolkit'
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
        }
    
    }
});
export const { saveTodo, setCheck } = todoSlice.actions
export const selectTodolist= state =>state.todos.todoList

export default todoSlice.reducer