import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {useAuth} from "../Provider/authProvider"


function Get() {
  const [fetchedData, setFetchedData] = useState([]);
  console.log('page in get func')
  const {token}= useAuth();

  useEffect(() => {
    const getData = async () => {
        const headers={
            'Authorization': 'Bearer ' + token
        }
        
      const data = await axios.get("http://localhost:8080/api/auth/all",{headers})
      setFetchedData(data);
    };
    getData();
  }, []);

  console.log("data: ", fetchedData);
  
  //   console.log("data: ", fetchedData.data[0].roles.name);

  return (
    <div className="App">
      {/* <table className="table table-striped"> */}
      {fetchedData.data ? (
        <table className="table table-stripped table-hover" id="tb">
          <thead className="table-dark">
            <tr >
              <th scope="col">ID</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              {/* <th scope="col">Roles</th> */}
            </tr>
          
          </thead>
          <tbody id="bd">
          {fetchedData.data.map((d,idx) => (
            
            <tr key={idx}>
              <td >{d.id}</td>
              <td>{d.username}</td>
              <td>{d.email}</td>

              {/* <td key={idx}>{d.roles}</td> */}
              
                
              {/* {d.roles.map((roles, index) => {
            <td key={index}>{roles.name}</td>
            })} */}
                

              {/* {fetchedData.data.roles.map((e, idy) => (
            <td key={idy}>{e.name}</td>))} */}
            </tr>
          ))}
          </tbody>
          
        </table>
      ) : null}

      {/* </table> */}
    </div>
  );
}

export default Get;
