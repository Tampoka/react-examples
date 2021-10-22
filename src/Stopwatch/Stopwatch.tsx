import React, {useEffect, useState} from "react";
import {Button, Card, CardActions} from "@material-ui/core";
import s from "./Stopwatch.module.css"


export type StopwatchPropsType={

}
export const Stopwatch:React.FC<StopwatchPropsType>=(props)=>{
    const [time, setTime] = useState<number>(0);
    const [running, setRunning] = useState<boolean>(false);
    useEffect(() => {
        let interval:any;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);

    return (
        <Card className={s.card}>
            <div className={s.numbers}>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <CardActions className={s.buttons}>
                <Button color="primary" variant="contained" onClick={() => setRunning(true)}>Start</Button>
                <Button  color="secondary" variant="contained" onClick={() => setRunning(false)}>Stop</Button>
                <Button variant="outlined" onClick={() => {
                    setRunning(false);
                    setTime(0);
                }}>Reset</Button>
            </CardActions>
        </Card>
    );
}
