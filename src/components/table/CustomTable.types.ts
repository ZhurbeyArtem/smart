import { TableColumnsType } from "antd";
import { IUser } from "../../interfaces/user";

export const columns: TableColumnsType<IUser> = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Username',
    dataIndex: 'username',
    width: 150,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    width: 150,
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    width: 150,
  },
];
