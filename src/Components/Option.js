import './Option.css'

const Option = () => {
    return(
        <div className='container'>
            <div className='card'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZ7P6-JVEm_eT-xJyQlJunq5c_vqzIQ7cYsZ8NfD3oDn5iACFImiOf2vp-RGdMS7hVPs&usqp=CAU' />
                <p>Doctors</p>
            </div>
            <div className='card'>
                <img src='https://www.sunwaymedical.com/images/uploads/page/SUN_general-medicine-use-storage.png' />
                <p>Medicines</p>
            </div>
            <div className='card'>
                <img src='https://img.freepik.com/free-vector/medical-treatment-tools-composition_1284-16379.jpg?w=2000' />
                <p>Medical Supplies</p>
            </div>
            <div className='card'>
                <img src='https://i.pinimg.com/736x/f5/cc/6a/f5cc6ae8617305a3075745f621fe8cd1.jpg' />
                <p>Medical Tests <br/> and Analysis</p>
            </div>
        </div>
    );
}

export default Option;