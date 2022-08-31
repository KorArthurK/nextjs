// import { useState,useEffect } from 'react'
// import axios from 'axios';
// import DataTable from 'react-data-table-component'; 

// const CustomTable = () => {
//     const [Countries, setCountries] = useState([]);


//     const getCountries = async () => {
//         try{
//             const response = await axios.get("https://restcountries.com/v2/all");
//             setCountries(response.data);
//             console.log(response.data);

//         }catch(error){
//             console.log(error);
//         }
//     }
        
//     const columns = [
//         {
//             name:"Country Name",
//             seletor:row => row.name
//         },
//         {
//             name:"Country Captital",
//             seletor:row => row.capital
//         },
//         {
//             name:"Flag",
//             seletor:row => <image src={row.flag} width={50} height={50} />
//         }
//     ]

//     useEffect(()=>{
//         getCountries();
//     },[])
    
//     return(
//         <div>
//             <DataTable columns={columns} data={Countries} pagination selectableRows fixedHeader/>
//         </div>
//     )
// }

// export default CustomTable