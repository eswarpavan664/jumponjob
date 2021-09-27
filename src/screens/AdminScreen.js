/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/first */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Layout, Menu, Breadcrumb,Card, Col, Row } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import '../index.css'
import 'antd/dist/antd.css'; 
import {auth} from "../firebase"
import Job from "../components/Job"
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import logo from "../images/job.png"
 
 
 

class  AdminScreen extends React.Component{
      constructor(props){
        super(props)
        this.state={
          adminname:props.presentUser,
          category:"profile",
          type:"",
          collapsed: false,
        }
   
     }
     passprops=(a,b)=>{
        this.setState({
          category:a,
          type:b,
          
        })
     }
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
    render(){
        const { collapsed } = this.state;
         
    return (
        <Layout>
                   
                   <Header>
             <Row>
                 <Col>
                 <img src={logo} style={{width:50,height:50}}/>
            
                 </Col>
                 <Col style={{marginLeft:'1%'}}>
                
                 <h2 style={{color:'white'}}>Jump on Job</h2>
                 <div>
           
           
        </div>
                 
                 </Col>
             </Row>

        </Header>
        
        <Layout style={{ minHeight: '100vh' }}>



 
        
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} style={{marginTop:'7%'}}>

         
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            
             <Menu.Item key="1" onClick={()=>this.passprops("profile","admin")} icon={<UserOutlined />}>
              Profile
            </Menu.Item>



            <SubMenu key="sub1" icon={<UploadOutlined />} title="Post Jobs">
              <Menu.Item key="3" onClick={()=>this.passprops("Technical","upload")}>Technical</Menu.Item>
              <Menu.Item key="4" onClick={()=>this.passprops("NonTechnical","upload")}>Non-Technical</Menu.Item>
              
            </SubMenu>

            <SubMenu key="sub2" icon={<TeamOutlined />} title="Employees Applied">
              <Menu.Item key="6" onClick={()=>this.passprops("Technical","applied")}>Technical</Menu.Item>
              <Menu.Item key="8" onClick={()=>this.passprops("NonTechnical","applied")}>Non-Technical</Menu.Item>
            </SubMenu>

            <Menu.Item key="5" onClick={()=>this.passprops("Statistics","admin")} icon={<PieChartOutlined />}>
              Statistics
            </Menu.Item>
            <Menu.Item key="2"  onClick={() => auth.signOut()} icon={<PieChartOutlined />}>
               Logout
            </Menu.Item>

          </Menu>

        </Sider>
        <Layout>  
              <Content style={{ padding: '0 50px',backgroundColor:'gray',paddingBottom:'20%',marginTop:'5%'}}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 580,borderRadius:10 }}>
                   <Job  cat={this.state.category}  typ={this.state.type} userid={this.state.adminname.uid} photourl={this.state.adminname.photo}/>
                </div>
              </Content>
               
              <Footer style={{ textAlign: 'center' }}>copyright by Jump On Job </Footer>
            </Layout>
        
      </Layout>
      </Layout>
    )
    }
}

export default AdminScreen;
