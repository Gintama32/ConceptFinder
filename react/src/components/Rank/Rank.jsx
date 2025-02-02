function Rank({username, userEntries}) {
    return (
        <div className="tc">
            <div className="navy f3 ">
                { `${username}, your entries are...` }
            </div>
            <div className="red f1">
                {`#${userEntries}`}
            </div>
        </div>
    )
}
export default Rank;