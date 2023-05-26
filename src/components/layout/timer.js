const Timer = ({time, maxTime}) => {
    return ( 
        <div className="progress">
            <div className="progress-bar" style={{width: `${time * 100 / maxTime }%`}} role="progressbar" aria-valuenow={time} aria-valuemin="0" aria-valuemax={maxTime}></div>
        </div>
     );
}
 
export default Timer;
