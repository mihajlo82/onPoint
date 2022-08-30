import React,{Suspense} from 'react';
import mainStyle from './Main.module.css';
import Button from '@mui/material/Button';
import Header from './header/Header';
import Details from './details/Details';
import useMain from './useMain';
const AutoCompleteInput = React.lazy(() => import('./autocompleteInput/AutoCompleteInput'));

const Main = () => {
   const {val, setVal, showDetail, setShowDetail}= useMain();
  return (
    <main className={mainStyle.mainWrapp}>
        <Header />
         
         <Suspense fallback={<div>Loading...</div>}>
            <AutoCompleteInput setVal={setVal} showDetail={showDetail}  />
        </Suspense>

        <Button variant="contained"  style={{margin:'20px'}}  onClick={()=>setShowDetail(prev => !prev)}>
            {showDetail ? 'Close' : 'Submit'}
          </Button>
      
        {showDetail && <Details val={val} setVal={setVal} /> }
    </main>
  )
}

export default Main