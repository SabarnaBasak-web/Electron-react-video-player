import React, { useContext } from 'react';
import { useFormik } from 'formik';
// import { UrlContext } from '../Context/urlContext';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import {addURL} from '../Store/Reducers';

function InputComponent() {
    const url = useSelector(state=>state.url);
    const dispatch = useDispatch();    
    const formik = useFormik({
        initialValues: {
            url: '',
        },
        onSubmit: values => {
            dispatch(addURL(values.url));                
        },
    })
  
    return (
        <form onSubmit={formik.handleSubmit} className="w-full p-1">
            <label htmlFor="url" className='font-Manrope w-1/3' >URL </label>
            <input
                id="url"
                name="url"
                type="url"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="border-b-4 border-blue-600 bg-slate-800 ml-2 outline-none px-2 py-1 font-Manrope w-2/3"
            />
            <button type="search" className='w-fit bg-blue-600 font-Manrope rounded px-2 py-1 ml-2'><SearchIcon /> Search</button>
        </form>
    )
}

export default InputComponent
