
const Counter =({count, setCount})=> {


return (
    <>

        <h1>Counter</h1>
        <div className="card">
            {/* <button onClick={handleClick}> */}
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            count is {count}
            </button>
        </div>
    
    </>
    );
}
export default Counter;