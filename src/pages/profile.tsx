import { useState, ChangeEvent } from "react";

const imgUrl =
  "https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg";

const Profile = () => {
  const [name, setName] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleTagInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const handleAddTag = () => {
    setTags([...tags, tagInput.trim()]);
    setTagInput("");
  };

  return (
    <>
      <div className="main">
        <div className="profile">
          <img className="profile__img" src={imgUrl} alt="profilepic" />
          <h1 className="profile__name">{name}</h1>
          <div className="profile__tags">
            {tags.map((tag, index) => (
              <div key={index} className="profile__tags__item">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="side__menu">
          <p>Name:</p>
          <input
            value={name}
            onChange={handleNameChange}
            className="side__menu__input"
            type="text"
          />
          <p>Tags</p>
          <input
            value={tagInput}
            onChange={handleTagInputChange}
            className="side__menu__input"
            type="text"
          />{" "}
          <button onClick={handleAddTag} className="side__menu__button">
            Add{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
