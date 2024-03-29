import { Link, useSearchParams } from 'react-router-dom';
import './dashboard.css';

const Dashboard = (props) => {
    const { users } = props; 
    const [ searchParams ] = useSearchParams();
    var admLogged = searchParams.get('admLogged');

    const handleDelete = (e) => {
        //console.log(e.target); 
       
        let child = e.target.parentElement
        //console.log(parent, child); 
        let req = window.confirm("Are you sure you want to delete this user ?")
        if(req){
            child.remove(); 
        }
    }

    return (
        <div className='hd-title mt-5 mb-5'>
            <h4 className='fst-italic'>Dashboard</h4>

            { admLogged ? 

            <div className="wrapper mt-3 mb-9 py-3">
                {
                    users.length ? users.map((user, index) => (
                        <div key={index} className="user-wrapper mx-3 my-3 py-3">
                            <h5 className='text-break fst-italic'>{user.name}</h5>
                            <p className='text-break  fw-500'>{user.city}</p>
                            {/* <Link to={`/profile/${user.id}?message=happyWeekend&day=sunday`}> */}
                            <Link to={`/profile/${user.id}`}>
                                <button className='btn btn-success  text-break mx-2'>Go to profile</button>
                            </Link> 
                            <button className='btn btn-danger text-break' onClick={handleDelete}>Delete</button>
                        </div>
                    )) : 
                    <div>
                        <h2>No users available!</h2>
                    </div>
                }
            </div> 
             : <h6 className='fst-italic mt-3'>Admin Log-in required to view Dashboard :  <Link to={`/`}>
             <button className='btn btn-info fs-5'>Click here</button> 
             </Link></h6> 
            }
            {/* <div className='adjust'></div> */}
        </div>
    )
}

export default Dashboard;