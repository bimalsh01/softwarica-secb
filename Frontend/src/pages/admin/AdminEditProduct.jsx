import React,{useState} from 'react'

const AdminEditProduct = () => {
    // Make useState
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productCategory, setProductCategory] = useState('')

    // make useState for image
    const [productImage, setProductImage] = useState(null)
    const [previewImage, setPreviewImage] = useState(null)

    // image upload function
    const handleImageUpload = (event) => {
        const file = event.target.files[0]
        console.log(file)
        setProductImage(file)
        setPreviewImage(URL.createObjectURL(file))
    }
    return (
        <>
            <div className='m-4'>

                <h3>Editing product - <span className='text-danger'>'Macbook'</span></h3>

                <div className='d-flex gap-3'>
                    <form action="">
                        <label>Product Name</label>
                        <input onChange={(e) => setProductName(e.target.value)} className='form-control mb-2' type="text" name="" id="" placeholder='Enter product name' />

                        <label htmlFor="">Product Description</label>
                        <textarea onChange={(e) => setProductDescription(e.target.value)} className='form-control mb-2' placeholder={"Enter description"} cols="4" rows="4"></textarea>

                        <label htmlFor="">Price</label>
                        <input onChange={(e) => setProductPrice(e.target.value)} type="number" className='form-control mb-2' placeholder='Enter your price' />

                        <label htmlFor="">Select category</label>
                        <select onChange={(e) => setProductCategory(e.target.value)} className='form-control mb-2'>
                            <option value="Flower">Flower</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Gadgets">Gadgets</option>
                            <option value="Mobile">Mobile</option>
                        </select>

                        <label>Product Image</label>
                        <input onChange={handleImageUpload} type="file" className='form-control' />

                        <button className='btn btn-primary w-100 mt-2'>Update product</button>

                    </form>
                    <div>
                        <h6>Old Image Preview</h6>
                        <img className='img-fluid rounded-4 object-fit-cover' width={300} height={300} src="https://th.bing.com/th/id/OIP.ucFQYLkHlaC5wht9HnnJ6QHaE7?rs=1&pid=ImgDetMain" alt="" />


                        <h6 className='mt-4'>New Image</h6>
                        {
                            previewImage ? <img src={previewImage} alt="product Image" className='img-fluid rounded-4 object-fit-cover' width={300} height={300}  />
                            : <p>No image selected!</p>
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default AdminEditProduct
