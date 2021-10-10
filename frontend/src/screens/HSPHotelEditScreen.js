

import React, { useEffect,  useState } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { detailHotel, updateHotel } from '../actions/hotelActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { HOTEL_UPDATE_RESET } from '../constants/hotelConstants';
//import Rating from '../components/Rating';
//import { Link } from 'react-router-dom';




export default function HSPHotelEditScreen(props) {
  const hotelId = props.match.params.Htlid;
  const [hotelname, setHotelName] = useState('');
  const [addressline1, setAddressLine1]=useState('');
  const [addressline2, setAddressLine2]=useState('');
  const [city, setCity]=useState('');
  const [province, setProvince]=useState('');
  const [country, setCountry]=useState('');
  
  const [description, setDescription]=useState('');
  const [category, setCategory]=useState('');

  
  const [image, setImage] = useState('');



  
  const hoteldetail = useSelector((state) => state.hoteldetail);
  const { loading, error, hotel } = hoteldetail;

  const hotelUpdate = useSelector((state) => state.hotelUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = hotelUpdate;

  

  const dispatch = useDispatch();

 

  useEffect(() => {
    if (successUpdate) {
      props.history.push('/myHotels');
    }
    if (!hotel || hotel._id !== hotelId || successUpdate) {
      dispatch({ type: HOTEL_UPDATE_RESET });
      dispatch(detailHotel(hotelId));
    } else {
      setHotelName(hotel.hotelname);
      
      setImage(hotel.image);
      setAddressLine1(hotel.addressline1);
      setAddressLine2(hotel.addressline2);
      setCity(hotel.city);
      setProvince(hotel.province);
      setCountry(hotel.country);
      setDescription(hotel.description);
      setCategory(hotel.category);

     
    }
  }, [hotel, dispatch, hotelId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
        updateHotel({
          _id: hotelId,
          hotelname,
          image,
          addressline1,
          addressline2,
          city,
          province,
          country,
          description,
          category
        })
      );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    console.log(file)
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };


 

  return (
    <div className="pageBody">
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
       <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Hotel</h1>
        </div>
     
            <div>
              <label htmlFor="name">Hotel Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter hotel name"
                value={hotelname}
                onChange={(e) => setHotelName(e.target.value)}
              ></input>
            </div>
            <div>
          <label htmlFor="category">Category</label>
          <select id="category" selected={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option value='normal'>Normal</option>
        <option value='standrad'>Standrad</option>
        <option value='luxcury'>Luxcury</option>
        <option value='high luxcury'>High Luxcury</option>
       
      </select>
        </div>
            <div>
              <label htmlFor="name">Address Line 1 </label>
              <input
                id="address1"
                type="text"
                placeholder="Enter hotel address line 1"
                value={addressline1}
                onChange={(e) => setAddressLine1(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="name">Address Line 2 </label>
              <input
                id="address2"
                type="text"
                placeholder="Enter hotel address line 2"
                value={addressline2}
                onChange={(e) => setAddressLine2(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="city">City </label>
              <input
                id="city"
                type="text"
                placeholder="Enter hotel city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="province">Province </label>
              <input
                id="province"
                type="text"
                placeholder="Enter hotel Province"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="province">Country </label>
              <input
                id="country"
                type="text"
                placeholder="Enter hotel country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="description">Description </label>
              <textarea
                id="description"
                type="text"
                placeholder="Enter hotel Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="imageFile">Image File</label>
              <input
                type="file"
                id="imageFile"
                label="Choose Image"
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <LoadingBox></LoadingBox>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}
            </div>
    
            <div>
              <label></label>
              <button className="primary" type="submit">
                Update
              </button>
            </div>
           
           

         
      </form>
 
 </>
          
          )}
    </div>
  );
}
