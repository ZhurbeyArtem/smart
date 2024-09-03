import { Input } from "antd";

import CustomTable from "./table/CustomTable";

import s from './App.module.css'
import { useEffect } from "react";

import { getUsers, selectFilteredUsers } from "../redux/slices/user/UserActions";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { setSearchText } from "../redux/slices/user/UserSlicer";

const { Search } = Input;

function App() {
  const { isError, isLoading } = useAppSelector(state => state.users)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const filteredUsers = useAppSelector(selectFilteredUsers);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(e.target.value));
  };

  return (
    isError
      ? <p>Error try reload page</p>
      : <div className={s.container}>
        <div>
          <Search placeholder="input search text" onChange={handleSearchChange} className={s.input} />
          <CustomTable isLoading={isLoading} data={filteredUsers} />
        </div>
      </div>
  )
}

export default App
