import React from 'react';
import { useParams } from 'react-router-dom';

const Detailpage:React.FC = () => {
  const {id} = useParams();
  return (
    <div>
      {id}
    </div>
  )
}

export default Detailpage;
