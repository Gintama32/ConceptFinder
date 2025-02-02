import "./Generalizer.css";

function Generalizer({ info }) {
  return (
    <div className="mt2 mw6 br2 shadow-2 pa3">
        <h2>The Concepts in Image are:</h2>
      {info.length > 0 ? (
        <div className="flex flex-row flex-wrap justify-between">
          {info
            .filter((data) => data.value >= 0.95) // Filter items where value > 0.96
            .map((data, index) => ( // Map over the filtered items
              <div  className ='box grow' key={index}>
                <p>{data.name}</p>
              </div>
            ))}
        </div>
      ) : (
        <p>No data to display</p>
      )}
    </div>
  );
}

export default Generalizer;
