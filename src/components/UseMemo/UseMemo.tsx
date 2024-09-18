import { useMemo, useState } from "react";

const UseMemo = () => {
    const [num1, setNum1] = useState(1);
    const [num2, setNum2] = useState(2);
    const [count, setCount] = useState(0);
    const sum = useMemo(() => {
        console.log("num1: ", num1, " , num2: ", num2);
        return num1 + num2;
    }, [num1, num2]);
    return (
        <div>
            <p>Sum: <span>{sum}</span></p>
            <input type="number" onChange={(e) => setNum1(Number(e?.target?.value))} />
            <input type="number" onChange={(e) => setNum2(Number(e?.target?.value))} />
            <p>Count: {count}</p>
            <button type="button" onClick={() => setCount(count+1)}>Increment count</button>
        </div>
    )
}

export default UseMemo;
