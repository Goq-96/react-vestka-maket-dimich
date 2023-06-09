import { NavLink } from 'react-router-dom';
import img from '../../images/user.png'
import css from "./People.module.css"


function People(props) {

     let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
     let pages = [];
     for(let i = 1; i <= pagesCount; i++){
         pages.push(i)
     }

    return(
        <div>
            <div>
                {
                    pages.map((p) => {
                        return <span  key={p}
                            className={props.currentPage === p ? css.selected : ""}
                            onClick={(e) => {props.onPageChanged(p)}}
                        >{p}</span>
                    })
                }
            </div>
        {
            props.users.map(u =>  <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small 
                                    :
                                    img } alt="" className={css.imgPeople}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                u.followed ? <button onClick={() => {props.unfollow(u.id)}}>UNFOLLOW</button> 
                                : <button onClick={() => {props.follow(u.id)}}>FOLLOW</button>
                            }
                            
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            {/* <div>{"u.location.country"}</div> */}
                            {/* <div>{"u.location.city"}</div> */}
                        </span>
                    </span>
                </div>)
        }
    </div>
    )
}

export default People;