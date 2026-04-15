function Aboutlayout({ children }) {
  return (
    <div>
      <div className="bg-yellow-400">Header</div>
      {children}
      <div className="bg-yellow-400">footer</div>
    </div>
  );
}

export default Aboutlayout;
