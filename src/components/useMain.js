import {useState} from 'react'

const useMain = () => {
    const [val, setVal] = useState([]);
    const [showDetail, setShowDetail] = useState(false);

  return {val, setVal, showDetail, setShowDetail}
}

export default useMain