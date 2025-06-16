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

const MyComponent = () => {
  return (
    <>
      <div>Nguyen Tuan Tu update</div>
      <div className='child'
        style = {
          { borderRadius: "10px" }
        }
      >Mau do</div>
    </>
  );
}

export default MyComponent; //export ra ngoai de su dung o file khac