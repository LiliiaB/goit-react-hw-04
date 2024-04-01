import css from "./ImageCard.module.css";

export const ImageCard = ({ image: { urls, title, likes, user } }) => {
  return (
    <div className={css.card}>
      <img src={urls.small} alt={title} className={css.image} />
      <div className={css.details}>
        <p className={css.likes}>Likes: {likes}</p>
        <p className={css.name}>Author: {user.name}</p>
      </div>
    </div>
  );
};

export default ImageCard;
