
function ImageDisplay({imgURL}){

    return (
        <div>
        <img
          alt=""
          src={imgURL}
          className="pa3 mw40 grow"
          style={{maxWidth:"680px", height:"410px"}}
          />
        </div>
)
}
export default ImageDisplay;



