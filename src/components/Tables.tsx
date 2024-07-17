import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

// import { useState, useEffect } from 'react';
// import data from '../data.json'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'رقم الوحدة', width: 100 },
  { field: 'Co2', headerName: 'Co2', width: 150 },
  { field: 'EC', headerName: 'EC', width: 130 },
  { field: 'ExhaustSwitch', headerName: 'ExhaustSwitch', width: 170 },
  { field: 'Humidity', headerName: 'Humidity', width: 150 },
  { field: 'Temperature', headerName: 'Temperature', width: 150 },
  { field: 'PH', headerName: 'الأس الهيدروجيني', width: 150 },
  { field: 'IrrgationSwitch', headerName: 'IrrgationSwitch', width: 150 },
  { field: 'coolSwitch', headerName: 'coolSwitch', width: 150 },
  { field: 'fanSwitch', headerName: 'fanSwitch', width: 150 },
  { field: 'date', headerName: 'date',  width: 250 },

];

const rows = [
  { id: 1, Co2: 'Snow', EC: 'Jon',ExhaustSwitch:false,Humidity: 30,Temperature: 83, PH: 35,IrrgationSwitch: true,coolSwitch: false,fanSwitch: true,date:"10:10 17/12/2022" },

  { id: 2, Co2: 'random', EC: 'mamdo',ExhaustSwitch:false,Humidity: 30,Temperature: 83, PH: 35,IrrgationSwitch: true,coolSwitch: true,fanSwitch: true,date:"10:11 17/12/2022" },
  { id: 3, Co2: 'mahmod', EC: 'weal',ExhaustSwitch:true,Humidity: 32,Temperature: 83, PH: 423,IrrgationSwitch: false,coolSwitch: true,fanSwitch: true,date:"10:12 17/12/2022" },
  { id: 4, Co2: 'wahed', EC: 'adam',ExhaustSwitch:false,Humidity: 34,Temperature: 83, PH: 35,IrrgationSwitch: true,coolSwitch: true,fanSwitch: true,date:"10:14 17/12/2022" },
  { id: 5, Co2: 'S now', EC: 'Jon',ExhaustSwitch:true,Humidity: 54,Temperature: 83, PH: 234,IrrgationSwitch: true,coolSwitch: false,fanSwitch: false,date:"10:13 17/12/2022" },
  { id: 6, Co2: 'medhat', EC: 'Jon',ExhaustSwitch:false,Humidity: 23,Temperature: 83, PH: 35,IrrgationSwitch: false,coolSwitch: false,fanSwitch: true,date:"10:15 17/12/2022" },
  { id: 7, Co2: 'Snow', EC: 'watj',ExhaustSwitch:false,Humidity: 213,Temperature: 83, PH: 355,IrrgationSwitch: false,coolSwitch: true,fanSwitch: false,date:"10:16 17/12/2022" },
  { id: 8, Co2: 'what', EC: 'Jon',ExhaustSwitch:true,Humidity: 123,Temperature: 83, PH: 4,IrrgationSwitch: true,coolSwitch: false,fanSwitch: true,date:"10:18 17/12/2022" },
  { id: 9, Co2: 'Snow', EC: 'watas',ExhaustSwitch:false,Humidity: 12,Temperature: 987, PH: 345,IrrgationSwitch: true,coolSwitch: false,fanSwitch: false,date:"10:19 17/12/2022" },
  { id: 10, Co2: 'Snow', EC: 'Jon',ExhaustSwitch:false,Humidity: 23,Temperature: 87, PH: 35,IrrgationSwitch: true,coolSwitch: true,fanSwitch: false,date:"10:20 17/12/2022" },
  { id: 12, Co2: 'ExhaustSwitch', EC: 'Jon',ExhaustSwitch:true,Humidity: 1323,Temperature: 567, PH: 35,IrrgationSwitch: false,coolSwitch: true,fanSwitch: true,date:"10:21 17/12/2022" },
  { id: 13, Co2: 'Snow', EC: 'ExhaustSwitch',ExhaustSwitch:true,Humidity: 30,Temperature: 84563, PH: 345,IrrgationSwitch: true,coolSwitch: false,fanSwitch: false,date:"10:10 17/12/2022" },
  { id: 14, Co2: 'Snow', EC: 'Jon',ExhaustSwitch:false,Humidity: 30,Temperature: 45, PH: 35,IrrgationSwitch: false,coolSwitch: true,fanSwitch: true,date:"10:22 17/12/2022" },
  { id: 15, Co2: 'Co2', EC: 'Temperature',ExhaustSwitch:true,Humidity: 30,Temperature: 3, PH: 33455,IrrgationSwitch: true,coolSwitch: false,fanSwitch: false,date:"10:23 17/12/2022" },
  { id: 16, Co2: 'Snow', EC: 'Jon',ExhaustSwitch:false,Humidity: 30,Temperature: 83, PH: 35,IrrgationSwitch: false,coolSwitch: true,fanSwitch: false,date:"10:24 17/12/2022" },
  { id: 17, Co2: 'Snow', EC: 'Jon',ExhaustSwitch:true,Humidity: 30,Temperature: 83, PH: 35,IrrgationSwitch: false,coolSwitch: true,fanSwitch: false,date:"10:26 17/12/2022" },
  { id: 18, Co2: 'Snow', EC: 'Jon',ExhaustSwitch:false,Humidity: 30,Temperature: 83, PH: 35,IrrgationSwitch: true,coolSwitch: false,fanSwitch: false,date:"10:27 17/12/2022" },
];
[
  {
      "time": "2022-11-09T18:56:31.511Z",
      "data": {
          "Co2": 50,
          "EC": 70,
          "ExhaustSwitch": false,
          "Humidity": 30,
          "PH": 7,
          "IrrgationSwitch": false,
          "Temperature": 83,
          "coolSwitch": false,
          "fanSwitch": false
      }
  },
  {
      "time": "2022-11-09T18:56:31.512Z",
      "data": {
          "Co2": 50,
          "EC": 70,
          "ExhaustSwitch": false,
          "Humidity": 30,
          "IrrgationSwitch": false,
          "PH": 7,
          "Temperature": 83,
          "coolSwitch": false,
          "fanSwitch": false
      }
  }
]

export interface Pokedex {
  data: Datum[];
}

export interface Datum {
  time: Date;
  data: Data;
  id: Data;
}

export interface Data {
  Co2:             number;
  EC:              number;
  ExhaustSwitch:   boolean;
  Humidity:        number;
  IrrgationSwitch: boolean;
  PH:              number;
  Temperature:     number;
  coolSwitch:      boolean;
  fanSwitch:       boolean;
}

const Tables = (props:Pokedex ) => {
  
  // const [projects, setProjects] = useState([]);
console.log(props.data);
//  var rows:Array<string> = []
// var rows = rows
 

  
  // useEffect(() => {    
  //   const interval = setInterval(() => {
  //     console.log(data)
  //     // setProjects(data.json()) 
  //     console.log('from table This will run every 6 seconds and wanna get it to 15 minute !');

  //   }, 6000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div style={{ height: 850, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
  );
}
export default Tables