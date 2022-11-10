import React from 'react';
import Alert from '../index';
import '../style';

export default () => {
    return <div>
        <Alert type="info">这是一条警告提示</Alert>
           <br />
        <Alert type="positive">这是一条警告提示</Alert>
           <br />
        <Alert type="negative">这是一条警告提示</Alert>
        <br />
        <Alert type="warning">这是一条警告提示</Alert>
</div>} 

