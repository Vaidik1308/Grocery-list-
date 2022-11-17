import React from 'react'

const Header = ({title}) => {   //destructuring
    // const name = 'vaidik'
    // const headerStyle = {backgroundColor:'royalblue', color: 'yellow'};
  return (
    <header>
        {/* <p>{name}</p> */}
        {/* <h1>Groceries list</h1> */}
        <h1>{title}</h1>

    </header>
  )
}
Header.defaultProps = {
  title: "Default Title"
}

export default Header;