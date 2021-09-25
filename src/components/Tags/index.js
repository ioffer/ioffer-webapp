import { TextField } from "@material-ui/core";
import React,{useState} from "react";
import './tags.scss'


  const TagsInput =( {props,handelChange,addshop}) => {
    const [tags, setTags] = useState([]);
    const removeTags = indexToRemove => {
      setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    };
    const addTags = event => {
      if (event.target.value !== "") {
        setTags([...tags, event.target.value]);
        props.selectedTags([...tags, event.target.value]);
        event.target.value = "";
      }
    };
    return (
      <div className="tags-input">
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className='tag-title'>{tag}</span>
              <span className='tag-close-icon'
                onClick={() => removeTags(index)}
              >
                x
              </span>
            </li>
          ))}
        </ul>

        <TextField
          fullWidth
          type="text"
          // onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
          label="Tags"
          onChange={(e) => handelChange('tags', e.target.value)}
          value={addshop.tags}
          
        />
        
      </div>
    );
  };

export default TagsInput;