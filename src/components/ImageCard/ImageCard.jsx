import css from "./ImageCard.module.css";

export const ImageCard = ({ image: { urls, title, likes, user }, onClick }) => {
  return (
    <div className={css.card}>
      <img
        src={urls.small}
        alt={title}
        className={css.image}
        onClick={onClick}
      />
      <div className={css.details}>
        <p className={css.likes}>Likes: {likes}</p>
        <p className={css.name}>Author: {user.name}</p>
      </div>
    </div>
  );
};

export default ImageCard;
