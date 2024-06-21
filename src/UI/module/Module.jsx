import React, { useContext } from 'react';
import classes from "./MyModel.module.css"
import { AuthContext } from '../../utils';
const MyModal = ({children}) => {
  const {modal,setModal}=useContext(AuthContext)
    const modalList=[classes.myModal]
    if(modal){
      modalList.push(classes.active)
    }
    return (
        <>
          <div className={modalList.join(" ")} onClick={()=>setModal(false)}>
             <div className={classes.myModalContent} onClick={e=>e.stopPropagation()}>
                {children}
             </div>
          </div>  
        </>
    );
};

export default MyModal;