

import React, { useEffect,  useState } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { detailHotel, updateHotel } from '../actions/hotelActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { HOTEL_UPDATE_RESET } from '../constants/hotelConstants';

export default function HotelEditScreen(props) {
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
      props.history.push('/HotelManagement/adminhotellist');
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
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('http://localhost:8070/uploadR/', bodyFormData, {
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
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Hotel {hotelId}</h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter hotel name"
                value={hotelname}
                onChange={(e) => setHotelName(e.target.value)}
              ></input>
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
          </>
        )}
      </form>
    </div>
  );
}
