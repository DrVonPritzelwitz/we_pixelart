import { useEffect, useState } from 'react'
import db from './firebase'
import './App.css'
import { doc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';

function App() {
	const [colors, setMatrix] = useState([])

	const updatePixel = async (row, col, state) => {
		let update = {}
		update[`${row}_${col}`] = !state
		await updateDoc(doc(db, "colors", 'matrix'), update);
	}

const rows = 32;
const cols = 32;

const resetGrid = async() => {
	let newGrid = {};
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
		  newGrid[`${row}_${col}`] = true;
		}
	  }
	  await setDoc(doc(db, "colors", 'matrix'), newGrid);
}


const renderGrid = () => {
    const grid = [];
	 

    for (let row = 0; row < rows; row++) {
      const rowButtons = [];
      for (let col = 0; col < cols; col++) {
		const c = colors[`${row}_${col}`] ? 'pixel white' : 'pixel black';
        rowButtons.push(
          <span
            key={`${row}-${col}`}
            onClick={() => updatePixel(row, col, colors[`${row}_${col}`])}
			className={c}
           >
          </span>
        );
      }
      grid.push(
        <div key={row}>
          {rowButtons}
        </div>
      );
    }

    return grid;
  };




  useEffect(() => {
	const unsubscribe = onSnapshot(doc(db, "colors", 'matrix'), (doc) => {
		setMatrix(doc.data());
		return () => { 
			unsubscribe();
		}
	})
  }, []);



  return (
	<div className="grid-container">
      <h1>Pixel-art (32x32)</h1>
      <div className="grid">{renderGrid()}</div>
	  <button onClick={resetGrid} className='reset'>Reset</button>
    </div>
  )
}

export default App
