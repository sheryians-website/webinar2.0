const ImageCard = ({ src: src }: { src: string }) => {
  return (
    <img
      decoding="async" loading="lazy"      className="object-cover w-[calc(100vw-6.25rem)] max-w-xl flex-shrink-0 rounded-lg overflow-hidden"
      src={src}
      alt="image"
    />
  );
};
export default ImageCard;
