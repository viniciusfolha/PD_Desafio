import React from 'react'
import { DataTable } from 'carbon-components-react';

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,TableExpandedRow, TableExpandRow
} = DataTable;


const initialRows = [
  {
    id: 'a',
    name: 'Colecao a',
  },
  {
    id: 'b',
    name: 'Colecao b',
  },
  {
    id: 'c',
    name: 'Colecao c',
  },
];
const headers = [
  {
    // `key` is the name of the field on the row object itself for the header
    key: 'name',
    // `header` will be the name you want rendered in the Table Header
    header: 'Coleção',
  }
];

class TableCat extends React.Component {

    render(){
        return(
                <DataTable
                  rows={this.props.rows}
                  headers={headers}
                  render={({ rows, headers, getHeaderProps,getRowProps }) => (
                    <TableContainer title="Coleção">
                      <Table>
                        <TableHead>
                          <TableRow>
                            {headers.map(header => (
                              <TableHeader {...getHeaderProps({ header })}>
                                {header.header}
                              </TableHeader>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map(row => (
                            <React.Fragment key={row.id}>
                              <TableExpandRow {...getRowProps({ row })}>
                                {row.cells.map(cell => (
                                  <TableCell key={cell.id}>{cell.value}</TableCell>
                                ))}
                              </TableExpandRow>
                              {row.isExpanded && (
                                <TableExpandedRow>
                                  <TableCell colSpan={headers.length + 1}>
                                    <Table>
                                    <tbody>
                                        <tr>
                                            <td>Battery </td>
                                            <td>StatsBar</td>
                                        </tr>
                                        <tr>
                                            <td>Battery </td>
                                            <td>StatsBar</td>
                                        </tr>
                                    </tbody>
                                    </Table>                           

                                  </TableCell>
                                </TableExpandedRow>
                              )}
                            </React.Fragment>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}
                />
            );
    }
}

export default TableCat;


