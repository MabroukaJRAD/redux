import React from 'react'
import './TodoItem.css'
import Checkbox from '@material-ui/core/Checkbox'
import {useDispatch} from 'react-redux'
import { setCheck ,deleteTask } from '../features/todoSlice'


const TodoItem = ({name ,done ,id}) => {
const dispatch= useDispatch()
const handleCheck=() =>{
      dispatch(setCheck(id))
  }

  const removeTask=()=>{
    dispatch(
        deleteTask({
            id: id
        })
    )
}
    return (
        <div className='todoItem'>
            <Checkbox
            checked={done}
            onChange={handleCheck}
            color="primary"
             inputProps={{ 'aria-label':'secondary checkbox' }}
              />
            <p className={ 'todoItem--done'}> {name}</p>
            <div>
				<button className="remove-task-button" onClick={()=>{
					removeTask();
				}}>Delete</button>
			</div>
            
        </div>
        
    )
}

export default TodoItem
