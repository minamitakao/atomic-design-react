import "./styles.css";
// import { PrimaryButton } from './components/atom/button/PrimaryButton';
// import { SecondaryButton } from './components/atom/button/SecondaryButton';
// import { SearchInput } from './components/molecules/SearchInput';
// import { UserCard } from './components/organisms/user/UserCard';
import { Router } from './router/Router';


export default function App() {
  return (
    <Router />
    // <BrowserRouter>
    //   <HeaderOnlyLayout>
    //     <PrimaryButton>ボタン</PrimaryButton>
    //     <SecondaryButton>ボタン</SecondaryButton>
    //     <SearchInput />
    //     <UserCard user={user}/>
    //   </HeaderOnlyLayout>
    // </BrowserRouter>
  );
}
