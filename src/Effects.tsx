import { subscribe, unsubscribe } from './resources/API';
import { useEffect, useState } from 'react';

export function Effects(props: { sourceId: string }) {
    const [date, setDate] = useState(-1);
    const w = (a: number) => {
        setDate(a);
    };

    useEffect(() => {
        subscribe(props.sourceId, w);
        return () => {
            setDate(-1);
            unsubscribe(props.sourceId, w);
        };
    }, [props.sourceId]);

    return (
        <div>
            {props.sourceId}: {date}
        </div>
    );
}
