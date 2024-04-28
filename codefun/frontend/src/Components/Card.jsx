import React from 'react'

const Card = () => {
  const Container = styled.div`${props.css}`;
  return (
    <div className='product-card-body'>
      <div className='product-card-content'>
        <Container dangerouslySetInnerHTML={{ __html: props.html }} />
      </div>
      <a href={`/code?_id=${props._id}`}>
      <button className='get-code-button' >
        <BiCodeAlt style={{ fontSize: "20px" }} /> Get code
      </button>
      </a>
      <div className='product-card-footer'>
        <div className='product-card-profile'>
          <CgProfile />
          {props.username}
        </div>
        <div className='product-card-likes'>
          <MdFavoriteBorder />
          Favorite
        </div>
      </div>
    </div>
  )
}

export default Card
