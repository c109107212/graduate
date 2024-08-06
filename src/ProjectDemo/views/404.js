import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const App = () => {
    const navigate = useNavigate();
    const goToHomePage = ()=>{
        navigate('/');
    }
    return (
        <>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button onClick={()=>goToHomePage()} type="primary">Back Home</Button>}
            />
            
        </>
    )
}
  
export default App;