const Title = ({ text }) => {
  return (
    <div className="">
      <h2 className="title">{text || "Default Text"}</h2>
      <div className="title-underline"></div>
    </div>
  );
};
export default Title;
