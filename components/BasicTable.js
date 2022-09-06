import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import MOCK_DATA from './MOCK_DATA.json';

const BasicTable = props => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  //const [name, setName] = useState("");

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });
  const router = useRouter();

  function fetchDetails(_para1, _para2){
    //console.log(_para1, _para2);    
    // const para = {
    //   para1 : _para1,
    //   para2 : _para2
    // }
//    const test = _para1;
    const para1 = _para1;
    const para2 = _para2;
    router.push(`/bdetail/?pid=${para1}&name=${para2}`);
  };

  return (
    // <div className="table-container">
    <>
    <div className="table">
      <h2>User List</h2>
      <table className="thead-dark" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr key = {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th scope="col" {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);

            return (
              <tr  onClick={() => fetchDetails(row.original.id, row.original.first_name + row.original.last_name)} {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        {/* <tfoot>
          {footerGroups.map(footerGroup => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map(column => (
                <td {...column.getFooterProps()}>{column.render('Footer')} </td>
              ))}
            </tr>
          ))}
        </tfoot> */}
      </table>
    </div>
    </>
  );
};

export default BasicTable;
