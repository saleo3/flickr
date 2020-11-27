import React, { useState } from 'react';
import './styles.css';

const Sidebar = ({ obj }) => {
  const [isEditable, setEdit] = useState(false);
  const [title, setTitle] = useState(obj.name);

  const [isDescEditable, setDescEdit] = useState(false);
  const [showFull, setFull] = useState(false);
  let [description, setDescription] = useState(obj.description);

  // if (description.length > 250) description = description.slice(0, 250);
  // const addMore = () => (description = fullDescription);
  if (!showFull) {
    description = description = description.slice(0, 250);
  }

  return (
    <div className="sidebar_container">
      <div className="character_container">
        <img src="" alt="character" />
        <div className="character_title">
          <div className="divider"></div>
          {isEditable ? (
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          ) : (
            title
          )}
        </div>
        <img src="" alt="edit" onClick={(event) => setEdit(!isEditable)} />
      </div>
      <div className="data_container">
        <h3>
          <img src="" alt="icon" className="icon" />
          Description
        </h3>
        <div>
          {isDescEditable ? (
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              onClick={(event) => setDescEdit(!isDescEditable)}
            />
          ) : (
            description
          )}
          <br />
          <br />
          <button onClick={(_) => setFull(!showFull)}>See more</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
