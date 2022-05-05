import {BrowserRouter as Router} from 'react-router-dom';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import './App3.css';


const rows: GridRowsProp = [
    { id: 1, col1: 'IGN', col2: '10/10', col3: '23 de Febrero'},
    { id: 2, col1: 'PC Gamer', col2: '90/100', col3: '23 de Febrero' },
    { id: 3, col1: 'Eurogamer', col2: 'Essential', col3: '23 de Febrero' },
    { id: 4, col1: 'GameSpot', col2: '10/10', col3: '16 de Marzo' }
  ];
  
  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Criticos', width: 150 },
    { field: 'col2', headerName: 'Reviews', width: 150 },
    { field: 'col3', headerName: 'Publicado', width: 150 }
  ];
  
  function App3() {
    return (
      <div className='app3' style={{ height: 300, width: '100%' }}>
        <Router>
            <DataGrid rows={rows} columns={columns} />
        </Router>
        
      </div>
    );
  }
  
  export default App3;
