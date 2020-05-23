
  import React from 'react'
  import PropTypes from 'prop-types'
  import FormControlLabel from '@material-ui/core/FormControlLabel';
  import Button from '@material-ui/core/Button';
  import Checkbox from '@material-ui/core/Checkbox';
  import DeleteIcon from '@material-ui/icons/Delete';
  const Todo = ({ onClick, completed, text, onClickRemove }) => (
    <div style={{ position:'relative', width: '100%', display: 'block', textAlign:'left'}} >
      <FormControlLabel style={{ textDecoration: completed ? 'line-through' : 'none' }}
      control={
        <Checkbox
        checked={completed}
        onChange={onClick}
        name="checkedB"
        color="primary"
          />
        }
        label={text}
        />
        <Button onClick={onClickRemove} style={{ position: 'absolute', top: '8px', right:'0'}}>
          <DeleteIcon />
        </Button>
      </div>
      )
  
  Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }
  
  export default Todo;