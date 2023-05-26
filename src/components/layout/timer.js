const Timer = ({time, maxTime}) => {
    return ( 
        <div class="progress">
            <div class="progress-bar w-75" role="progressbar" aria-valuenow={time} aria-valuemin="0" aria-valuemax={maxTime}></div>
        </div>
     );
}
 
export default Timer;
