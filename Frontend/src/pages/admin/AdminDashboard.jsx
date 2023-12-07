import React from 'react'

const AdminDashboard = () => {
    return (
        <>
            <div className='m-4'>
                <div className='d-flex justify-content-between'>
                    <h1>Admin Dashboard</h1>

                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add Product
                    </button>

                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Create a new product!</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    ...
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <table className='table mt-2'>
                    <thead className='table-dark'>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Category</th>
                            <th>Product Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src="https://th.bing.com/th/id/OIP.F4r_Be7u4rlyASWn77m6cQHaE8?rs=1&pid=ImgDetMain" height={40} width={40} />
                            </td>
                            <td>Rose</td>
                            <td>NPR.200</td>
                            <td>Flower</td>
                            <td>Flower for decoration</td>
                            <td>
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-success">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </>
    )
}

export default AdminDashboard
