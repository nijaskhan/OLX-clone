import React,{useContext, useEffect, useState} from 'react';
import { FirebaseContext } from '../../store/Context';
import { postContext } from '../../store/postContext';
import Heart from '../../assets/Heart';
import './Post.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Posts() {
  const {setProductDet} = useContext(postContext);
  const {firebase} = useContext(FirebaseContext);
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    firebase.firestore().collection('products').get()
    .then((snap)=>{
      const posts = snap.docs.map((product)=>{
        return {
          ...product.data(),
          id: product.id
        }
      })
      setPosts(posts);
    })
    .catch((err)=>{
      console.log(err)
    });
  }, [])
  
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {
            posts.map((post)=>{
              return (
                <div className="card" onClick={()=>{
                  setProductDet(post)
                  history.push('/view');
                }}>
                  <div className="favorite">
                    <Heart></Heart>
                  </div>
                  <div className="image">
                    <img src={post.imageUrl} alt="Product-Image" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9; {post.price}</p>
                    <span className="kilometer">{post.category}</span>
                    <p className="name"> {post.productName}</p>
                  </div>
                  <div className="date">
                    <span>{post.date}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
        </div>
    </div> 
  );
}

export default Posts;
