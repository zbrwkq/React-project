const CardList = ({children}) => {
    return ( 
        <div className="row justify-content-between gy-5">
            {children}
        </div>
     );
}
 
export default CardList;