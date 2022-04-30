export const Todo = (props) => {
  const { title, userid } = props;
  console.log(title);

  return (
    <>
      <p>{`${title}(${userid})`}</p>
    </>
  );
};
