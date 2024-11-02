
import "./Data.css";

const Data = ({ tData }) => {
  

  return (
    
     <div className='center'>
        <div className='data'>
        <h2>Title: {tData.title}</h2>
        <p>Body: {tData.body}</p>
      </div>
     </div> 
      

  );
};

export default Data;
