import { useLoaderData } from 'react-router-dom';
import { useTable } from 'react-table';

const FoodTable = () => {
    const foods = useLoaderData();
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    });
    return (
        <div>
                {/* foods.map(food => */}
                    <table {...getTableProps()}>
                        {/* Render table header */}
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))}
                                </tr>
                            ))}
                        </thead>

                        {/* Render table body */}
                        <tbody {...getTableBodyProps()}>
                            {rows.map(row => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => (
                                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        ))}
                                    </tr>
                                );
                             })}
                        </tbody>
                    </table>
                // )

        </div>
    );
};

export default FoodTable;