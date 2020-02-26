import React , {useState} from 'react';
import { Menu, Dropdown,  Input ,Card} from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';
import "./select.style.css"
const list = [
  { 'id': 1, title: 'ali' },
  { 'id': 2, title: 'Mohammad' },
  { 'id': 3, title: 'Reza' },
  { 'id': 4, title: 'Said' },
  { 'id': 5, title: 'Sajjad' },
  { 'id': 6, title: 'Davoud' },
  { 'id': 7, title: 'ali' },
  { 'id': 8, title: 'Mohammad' },
  { 'id': 9, title: 'Reza' },
  { 'id': 10, title: 'Said' },
  { 'id': 11, title: 'Sajjad' },
  { 'id': 12, title: 'Davoud' },
];

function Select({trigger="hover"}) {
  const scrollbars = React.useRef();
  const [selected, setSelected] = useState("");
  const menu = (
    <Scrollbars
      onScroll={(e)=>console.log(e)}
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      autoHeight
      autoHeightMin={0}
      autoHeightMax={200}
      thumbMinSize={30}
      universal={true}

      style={{height: 300}}  ref={scrollbars}>

    <Menu onClick={(e) => setSelected(list.find((i)=> i.id == e.key  ))} mode="vertical">
          {list.map((item) =>
            <Menu.Item onItemHover={(e) => console.log(e.id)} key={item.id.toString()}>
              {item.title}
            </Menu.Item>
          )}
    </Menu>
 </Scrollbars>
  );

  return <div>

    <Card>
      {trigger}:
      <Dropdown trigger={trigger} overlay={menu} placement="bottomCenter">
        <Input value={selected ?selected.title:''} onChange={(e)=>console.log(e.target.value)} style={{ width: 200 }}   placeholder="Basic usage"/>

      </Dropdown>
    </Card>
  </div>;
}

export default Select;


// import { Input,Menu, Dropdown } from 'antd';
// import { Scrollbars } from 'react-custom-scrollbars';
//
// const list = [
//   {"id": 1, title :"ali"},
//   {"id": 2, title :"Mohammad"},
//   {"id": 3, title :"Reza"},
//   {"id": 4, title :"Said"},
//   {"id": 5, title :"Sajjad"},
//   {"id": 6, title :"Davoud"},
//   {"id": 7, title :"ali"},
//   {"id": 8, title :"Mohammad"},
//   {"id": 9, title :"Reza"},
//   {"id": 10, title :"Said"},
//   {"id": 11, title :"Sajjad"},
//   {"id": 12, title :"Davoud"}
// ];
// function Item({item}) {
//   // if(item){
//   //   const {title,id} = item;
//   //   return  <Menu.Item key={id.toString()}>
//   //     <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">    {title}</a>
//   //   </Menu.Item>
//   // }
//   // return null;
//   return  <Menu.Item key="0">
//     <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
//   </Menu.Item>;
// }
//
//
// function Select() {
//   const scrollbars= useRef();;
//   function getScrollTop() {
//     return this.refs.scrollbars.getScrollTop();
//   }
//
//   function getScrollHeight() {
//     return  scrollbars.getScrollHeight();
//   }
//
//   function getHeight() {
//     return  scrollbars.getHeight();
//   }
//
//   function scrollTop(top) {
//     const scrollTop = scrollbars.getScrollTop();
//     const scrollHeight = scrollbars.getScrollHeight();
//
//   }
//   const menu = (
//
//     <Menu>
//       <Scrollbars style={{height: 100 }}  ref={scrollbars}>
//
//         {list.map((item)=>
//          <React.Fragment> <Menu.Item onItemHover={(e)=>console.log(e.id)} key={item.id.toString()}>
//             <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">{item.title}</a>
//           </Menu.Item>
//           <Menu.Divider />
//          </React.Fragment>
//         )}
//
//       </Scrollbars>
//     </Menu>
//   );
//   return (
//     <div>
//       <Dropdown overlay={menu} placement="bottomCenter">
//         <Input  placeholder="Basic usage" />
//       </Dropdown>
//     </div>
//   );
// }

// export default Select;