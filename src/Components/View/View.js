import React,{useContext, useEffect, useState} from 'react';
import { postContext } from '../../store/postContext';
import { FirebaseContext } from '../../store/Context';
import { AuthContext } from '../../store/Context';
import './View.css';
import { useHistory } from 'react-router-dom';

function View() { 
  const {productDet} = useContext(postContext);
  const {firebase} = useContext(FirebaseContext);
  const [userDet, setUserDet] = useState();
  const {user} = useContext(AuthContext);
  const history = useHistory();
  useEffect(() => {
    if(user){
      try{
        const {userId} = productDet;
        firebase.firestore().collection('users').where('id','==',userId).get()
        .then((res)=>{
          res.forEach(doc=>{
            setUserDet(doc.data());
          })
        })
        .catch(()=> history.push('/login'))
      }catch{
        history.push('/');
      }
    }else{
      history.push('/login');
    }
  }, [])
  return (
    <div className="viewParentDiv">
    {
      productDet ? (
        <>
        <div className="imageShowDiv">
        <img
          src={productDet.imageUrl}
          alt="Product-Image"
        />
      </div>
        <div className="rightSection">
          <div className="productDetails">
            <p>&#x20B9; {productDet.price} </p>
            <span>Name : {productDet.productName}</span>
            <p>Category : {productDet.category}</p>
            <span>Date : {productDet.date}</span>
          </div>
          <div className="contactDetails">
            <p>Seller details</p>
            {
              userDet && (
                <>
                <p>Name : {userDet.name}</p>
                <p>Email : {userDet.email}</p>
                <p>Mobile : {userDet.mobile}</p>
                </>
              )
            }
          </div>
        </div>
      </>
      ) : (
        <>
          {history.push('/')}
        </>
      )
    }
    </div>
  );
}
export default View;
