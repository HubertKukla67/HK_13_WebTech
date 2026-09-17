function Technology() {
  
  const technologies =
  [
    {
      name:"React"
    },
    {
      name:"Vite"
    },
    {
      name:"JavaScript"
    }
  ]
  
  
  
  
  return (
    <div>
      <h2>React</h2>
      <p>Technologia frontendowa</p>
      <p>{technologies[0].name + " " + technologies[1].name + " " + technologies[2].name}</p>
    </div>
  );
}
export default Technology