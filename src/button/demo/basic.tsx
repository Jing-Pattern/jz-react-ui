
import React from 'react';
import Button from '../index';
import '../style';
export default () => {
   return <div>
     
        {/* <Button type="success" disabled={false}>这是一条警告提示</Button>
           <br />
        <Button type="positive">这是一条警告提示</Button>
           <br />
        <Button type="negative">这是一条警告提示</Button> */}
        <br />
      <Button sizi='large' onClick={()=>console.log(1)}>来点我</Button>
      <Button sizi='middle' onClick={()=>console.log(2)}>来点我</Button>
      <Button sizi='small' disabled onClick={() => console.log(3)}>来点我</Button>
</div>} 

