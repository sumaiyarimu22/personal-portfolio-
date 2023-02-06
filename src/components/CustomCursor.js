const CustomCursor = ({ innerCursorRef, outerCursorRef }) => {
  return (
    <>
      <div className="inner-curser" ref={innerCursorRef}></div>
      <div className="outer-curser" ref={outerCursorRef}></div>
    </>
  );
};

export default CustomCursor;
