import React, { useState } from 'react';
import { kaReducer, Table } from 'ka-table';
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';
import { Styles } from '../styled-components/DashboardStyle';



const dataArray = Array(10)
  .fill(undefined)
  .map((_, index) => ({
    column1: `W-O-Num row:${index}`,
    column2: `Name row:${index}`,
    column3: `Address row:${index}`,
    id: index
  }));

const tablePropsInit = {
  columns: [
    { key: 'W-O-Num', title: 'Work Order Number', dataType: DataType.String },
    { key: 'Name', title: '     Name     ', dataType: DataType.String },
    { key: 'Address', title: '     Address    ', dataType: DataType.String },
  ],
  data: dataArray,
  editingMode: EditingMode.Cell,
  rowKeyField: 'id',
  sortingMode: SortingMode.Single
};

const WorkOrders = () => {
  const [tableProps, changeTableProps] = useState(tablePropsInit);
  const dispatch = action => {
    changeTableProps(prevState => kaReducer(prevState, action));
  };

    return (
        <Styles>
            <Table {...tableProps} dispatch={dispatch} />
        </Styles>
    )
};

export default WorkOrders;