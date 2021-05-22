import { Header } from '../atom/layout/Header';

export const HeaderOnlyLayout = (props) => {
  const {children} = props;
  return(
    <>
      <Header />
      {children}
    </>
  );
}