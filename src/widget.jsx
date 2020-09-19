import React,{useState} from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import IconButton from '@material-ui/core/IconButton';

export default ({value, setValue, limits})=> {
  const {MAX, MIN} = limits;

  const [focus, setFocus] = useState(false);

  const clickHandler = (target) => {    
    if(target==="+" && value + 1 <= MAX){
      setValue(Number(value) + 1);      
    } else if (target==="-" && value - 1 >= MIN) {
      setValue(Number(value) - 1);
    }
  };

  const wheelHandler = (e) => {
    const target = -e.deltaY;    
    if(focus && target > 0 && value + 1 <= MAX){
      setValue(Number(value) + 1);
    } else if (focus && target < 0 && value - 1 >= MIN) {
      setValue(Number(value) - 1);
    }    
  };

  return (
    <div onWheel={wheelHandler}>      
      <section>
        <div>
          <label htmlFor="name">Введите число</label>
          <input className="input" onBlur={()=>setFocus(false)} onFocus={()=>setFocus(true)} max={MAX} min={MIN} value={Number(value)} onChange={(e)=>setValue(e.target.value)} type="number" name="name" id="name"/>
        </div>            
        <IconButton onClick={()=>clickHandler("+")} color="primary">
          <AddCircleOutlineIcon />
        </IconButton>
        <IconButton onClick={()=>clickHandler("-")} color="secondary">
          <RemoveCircleOutlineIcon />
        </IconButton>
      </section>
    </div>
  );
};
