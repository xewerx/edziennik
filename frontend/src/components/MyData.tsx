import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import Title from "../ui/Title";

function MyData() {
  const user = useSelector((state: RootState) => state.userState.user);

  return (
    <>
      <Title>Moje dane</Title>
      {/*@ts-ignore*/}
      <h3>Imię i nazwisko</h3>
      <p>{user?.username}</p>
      <h3>Adres e-mail</h3>
      <p>{user?.email}</p>
      <h3>Rola</h3>
      <p>{user?.userType}</p>
    </>
  );
}

export default MyData;
