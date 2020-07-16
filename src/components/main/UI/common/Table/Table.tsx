import React, {CSSProperties, ReactNode} from 'react';
import {CardPackType} from "../../../BLL/cardsRedusers/cardsPack-reduser";
import {CardType} from "../../../BLL/cardsRedusers/cards-reduser";


export interface ITableModel {
    title: (index: number) => ReactNode;
    render: (dataItem: any, modelIndex: number, dataIndex: number) => ReactNode;
    // render: (dataItem: CardPackType | CardType, modelIndex: number, dataIndex: number) => ReactNode;
}

interface ITableProps {
    model: ITableModel[];
    data: any
    // data: Array<CardPackType> | Array<CardType>

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
                    padding: "20px 0",
                    margin: "20px",
                    border: '1px solid black',
                    borderRadius: "5px",
                    width: '90%',
                    display: 'flex',
                    flexFlow: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
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
                {/*CardPackType | CardType*/}
                {data.map((dataItem: any, dataIndex: number) => (
                    <div
                        key={dataItem._id || dataIndex}
                        style={{
                            borderBottom: '1px solid black',
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
