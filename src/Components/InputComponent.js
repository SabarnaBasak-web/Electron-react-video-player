import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { UrlContext } from '../Context/urlContext';
import SearchIcon from '@mui/icons-material/Search';
function InputComponent() {
    const { url, setURL } = useContext(UrlContext);
    const formik = useFormik({
        initialValues: {
            url: '',
        },
        onSubmit: values => {
            if (values !== '') {
                setURL({ currentURL: values, allURL: [...url.allURL, values] });
            }
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
