import React from 'react';
import './style.css'; //import css file

//() => {} 
// () : tham so dau vao
// => : tra ve ket qua
// {} : noi dung ham

//component = html + css + js

//Fragment: <></> : khong can phai dung <div> bao quanh
//JSX: JavaScript XML, cho phep viet HTML trong JavaScript
//JSX: chi ho phep viet mot phan tu goc, neu muon viet nhieu phan tu thi phai dung Fragment
//inline style: style={ {key: value} } 
    //dung object de chua cac thuoc tinh css

const MyComponent = () => {
  //kieu du lieu nguyen thuy
  const name = "Nguyen Tuan Tu"; //string
  const age = 18; //number
  // const isStudent = true; //boolean 
  // const isStudent = null; //boolean 
  const isStudent = undefined; //boolean 

  //kieu du lieu tham chieu
  const hobbies = [1, 2, 3]; //array
  const person = {    //object
    name: "Nguyen Tuan Tu",
    age: 18,
    isStudent: true,
    hobbies: ["Reading", "Coding", "Traveling"]
  };

  //{}: cho phep viet JavaScript trong JSX
  //JSON.stringify(): chuyen doi object thanh string de hien thi

  return (
    <>
      <div>Nguyen Tuan Tu update</div>
      <div className='child'
        style={
          { borderRadius: "10px" }
        }
      >Mau do {name}</div>
      <div>{age}</div>
      <div>{isStudent}</div>
      <div>{hobbies}</div>
      <div>{JSON.stringify(person)}</div>
      <div>{console.log("Nguyen Tuan Tu")}</div> 

    </>
  );
}

export default MyComponent; //export ra ngoai de su dung o file khac