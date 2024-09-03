import { FC } from 'react'
import { Table } from 'antd'

import { IUser } from '../../interfaces/user'
import { columns } from './CustomTable.types'

import s from './CustomTable.module.css'


interface ICustomTable {
  data: IUser[] | undefined,
  isLoading: boolean
}

const CustomTable: FC<ICustomTable> = ({ data,  isLoading }) => {
  return (
    <Table bordered loading={isLoading} columns={columns} dataSource={data} pagination={false} scroll={{ y: 500 }} className={s.table} />
  )
}

export default CustomTable