import React, {CSSProperties, ReactNode} from 'react';
import {CardPackType} from "../../../BLL/cardsRedusers/cardsPack-reduser";

export interface ITableModel {
    title: (index: number) => ReactNode;
    render: (dataItem: CardPackType, modelIndex: number, dataIndex: number) => ReactNode;
}

interface ITableProps {
    model: ITableModel[];
    data: Array<CardPackType>;

    headerStyle?: CSSProperties,
    tableStyle?: CSSProperties,
    rowsStyle?: CSSProperties,
    rowStyle?: CSSProperties,
}

const Table: React.FC<ITableProps> = (
    {
        model,
        data,

        headerStyle,
        tableStyle,
        rowsStyle,
        rowStyle,
    }
) => {

    return (
        <div
            style={{
                margin: '0 10px',
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                ...tableStyle,
            }}
        >
            <div
                style={{
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    margin: "20px",
                    border: '1px solid black',
                    borderRadius: "5px",
                    width: '90%',
                    display: 'flex',
                    flexFlow: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    ...headerStyle,
                }}
            >
                {model.map((m: ITableModel, index: number) => m.title(index))}
            </div>

            <div
                style={{
                    borderRadius: "5px",
                    border: '1px solid black',
                    width: '90%',
                    ...rowsStyle,
                }}
            >
                {data.map((dataItem: CardPackType, dataIndex: number) => (
                    <div
                        key={dataItem._id || dataIndex}
                        style={{
                            borderBottom: '1px solid black',
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            width: '90%',
                            padding: '20px',
                            display: 'flex',
                            flexFlow: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            ...rowStyle,
                        }}
                    >
                        {model.map((m, modelIndex) => m.render(dataItem, modelIndex, dataIndex))}

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Table;
