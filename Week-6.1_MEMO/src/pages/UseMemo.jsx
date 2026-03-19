import { useMemo, useState } from 'react'

const UseMemo = () => {
  // num = the number the user types in the input
  const [num, setNum] = useState("");

  // count = just a separate state to prove that clicking the button
  // does NOT re-run the heavy calculation below
  const [count, setCount] = useState(0);

  // useMemo caches the result of this calculation.
  // The loop runs 0+1+2+...+num which can be slow for large numbers.
  // With useMemo, React only re-runs this when `num` changes.
  // If only `count` changes (button click), this is SKIPPED — cached result is reused.
  const sum = useMemo(() => {
    let total = 0;
    for (let i = 0; i <= parseInt(num); i++) {
      total += i;
    }
    return total;
  }, [num]); // <-- dependency array: only re-run if `num` changes

  return (
    <div>
      {/* typing here changes `num` → triggers the useMemo calculation */}
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        placeholder="Enter a number"
      />

      {/* sum comes directly from useMemo — no extra useState needed */}
      <p>Sum: {sum}</p>

      {/* clicking this only updates `count`, not `num`
          so useMemo skips the calculation and returns the cached sum */}
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

export default UseMemo;
