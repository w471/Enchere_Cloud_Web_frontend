const Choose = (props) => {
    return(
        <>
            <select ref={props.myRef} >
                <option value={"="} >{"="}</option>
                <option value={">"} >{">"}</option>
                <option value={"<"} >{"<"}</option>
            </select>
        </>
    );
}

export default Choose;