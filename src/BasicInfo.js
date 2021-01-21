import React from 'react'

 class BasicInfo extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return ( 
      <div>
        <ul>
          <li>{this.props.person.name}</li>
          <li>{this.props.person.birthday}</li>
          <li>{this.props.person.age}</li>
        </ul>
      </div>

  );
}
}
export default BasicInfo;
