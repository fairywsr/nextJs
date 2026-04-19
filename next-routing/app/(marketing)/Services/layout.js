function Aboutlayout({ children }) {
  return (
    <div>
      <div className="bg-blue-400">Header</div>
      {children}
      <div className="bg-blue-400">footer</div>
    </div>
  );
}

export default Aboutlayout;
